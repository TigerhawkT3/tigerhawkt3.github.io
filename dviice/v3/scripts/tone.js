
// Example showing how to produce a tone using Web Audio API.
//var oscillator;
//var amp;
//var modulatorOscillator;
//var modulatorGain;

var clickVoice; // click voice
var voices = []; // chord voices
var channels = []; // keyboard channels
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
    this.start = function(frequency, size=1) {
        var now = audioContext.currentTime;
        this.osc.frequency.setValueAtTime(frequency, now);
        this.amp.gain.cancelScheduledValues(now);
        this.amp.gain.setValueAtTime(this.amp.gain.value, now);
        this.amp.gain.linearRampToValueAtTime(0.6/(size+1), audioContext.currentTime + 0.1); // change to 'now'?
    }
    this.stop = function() {
        var now = audioContext.currentTime;
        this.amp.gain.cancelScheduledValues(now);
        this.amp.gain.setValueAtTime(this.amp.gain.value, now);
        this.amp.gain.linearRampToValueAtTime(0.0, audioContext.currentTime + 1.0); // change to 'now'?
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
/*// Set the frequency of the oscillator and start it running.
function startTone(frequency, o=oscillator, a=amp, size=1) {
	var now = audioContext.currentTime;
	
	o.frequency.setValueAtTime(frequency, now);
	
	// Ramp up the gain so we can hear the sound.
	// We can ramp smoothly to the desired value.
	// First we should cancel any previous scheduled events that might interfere.
	a.gain.cancelScheduledValues(now);
	// Anchor beginning of ramp at current value.
	a.gain.setValueAtTime(a.gain.value, now);
	a.gain.linearRampToValueAtTime(0.6/(size+1), audioContext.currentTime + 0.1);
	
	//writeMessageToID( "soundStatus", "<p>Play tone at frequency = " + frequency  + "</p>");
}*/

/*function stopTone(a=amp) {
	var now = audioContext.currentTime;
	a.gain.cancelScheduledValues(now);
	a.gain.setValueAtTime(a.gain.value, now);
	a.gain.linearRampToValueAtTime(0.0, audioContext.currentTime + 1.0);
}*/
/*function waveform(o=oscillator, i=null) {
    // get or set waveform of given oscillator
    if (!i) return o.type
    o.type = {Q: 'sine', W: 'triangle', E: 'square', R: 'sawtooth'}[i]
}*/

/*function vibrato(g=modulatorGain, event=null) {
    // get or set vibrato of given amplifier
    if (!event) return (parseInt(g.gain.value / 5) || '`').toString();
     g.gain.value = {'`':0, '1':5, '2':10, '3':15, '4':20, '5':25}[event];
}*/
// init once the page has finished loading.
window.onload = initAudio;