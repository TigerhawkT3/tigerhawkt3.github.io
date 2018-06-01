var clickVoice; // click voice
var voices = []; // chord voices
var channels = []; // keyboard channels
var bend = 1;
// Create an oscillator and an amplifier.
function initAudio() {
	// Use audioContext from webaudio_tools.js
	if(!audioContext) return;
    clickVoice = new Voice() // voice for mouse clicks
    for (let i=0; i<8; ++i) { // voices for chords
        voices.push(new Voice())
    }
    for (let i=0; i<8; ++i) { // voices for keyboard presses
        channels.push(new Voice())
    }
}
    
function Voice() {
    this.note = null;
    this.osc = audioContext.createOscillator();
    fixOscillator(this.osc);
    this.frequency = 440;
    this.osc.frequency.value = 440;
    this.amp = audioContext.createGain();
    this.amp.gain.value = 0;

    // Connect oscillator to amp and amp to the mixer of the audioContext.
    // This is like connecting cables between jacks on a modular synth.
    this.osc.connect(this.amp);
    this.amp.connect(audioContext.destination);
    this.osc.start(0);
    // for vibrato, from the explanatory page at
    // http://music.arts.uci.edu/dobrian/s16/music147/examples/webaudio/html/vibrato.html
    this.mosc = audioContext.createOscillator();
    this.mosc.frequency.value = 6; // vibrato rate
    this.mamp = audioContext.createGain();
    this.mamp.gain.value = 0; // vibrato depth - 20 is good
    // Connect the LFO to its gain controller
    this.mosc.connect(this.mamp);
    // Connect the LFO's GainNode to the frequency AudioParam of the carrier
    this.mamp.connect(this.osc.frequency);
    // start the modulator oscillator
    this.mosc.start();
    this.start = function(frequency, size=1, pluck=false) {
        var now = audioContext.currentTime;
        this.frequency = frequency;
        this.osc.frequency.value = this.frequency * bend;
        this.amp.gain.cancelScheduledValues(now);
        this.amp.gain.setValueAtTime(this.amp.gain.value, now);
        if (pluck) {
            let base = 0.6/(size+1)
            this.amp.gain.setValueCurveAtTime(Float32Array.from([this.amp.gain.value, base*0.5, base, base*1.2, base*1.5, base]), now, 0.05)
        }
        else this.amp.gain.linearRampToValueAtTime(0.6/(size+1), now + 0.1);
    }
    this.stop = function() {
        var now = audioContext.currentTime;
        this.amp.gain.cancelScheduledValues(0);
        while (true) {
            try { // setValueAtTime sometimes doesn't play well with setValueCurveAtTime, even with the cancel(0) above
                this.amp.gain.setValueAtTime(this.amp.gain.value, now);
                break;
            }
            catch(e){}
        }
        this.amp.gain.linearRampToValueAtTime(0.0, now + 1.0);
    }
    this.changeBend = function(value) {
        bend = 2**(value/12) // https://en.wikipedia.org/wiki/Scientific_pitch_notation#Table_of_note_frequencies
        this.osc.frequency.value = this.frequency * bend
    }
    this.stopBend = function() {
        this.osc.frequency.value = this.frequency;
        bend = 1;
    }
    this.waveform = function(choice) {
        if (!choice) return this.osc.type
        else this.osc.type = {Q: 'sine', W: 'triangle', E: 'square', R: 'sawtooth'}[choice]
    }
    this.vibrato = function(choice) {
        if (!choice) return (parseInt(this.mamp.gain.value / 5) || '`').toString();
        else this.mamp.gain.value = {'`':0, '1':5, '2':10, '3':15, '4':20, '5':25}[choice];
    }
}
// init once the page has finished loading.
window.onload = initAudio;