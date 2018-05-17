
// Example showing how to produce a tone using Web Audio API.
var oscillator;
var amp;
var modulatorOscillator;
var modulatorGain;

// Create an oscillator and an amplifier.
function initAudio()
{
	// Use audioContext from webaudio_tools.js
	if( audioContext )
	{
		oscillator = audioContext.createOscillator();
		fixOscillator(oscillator);
		oscillator.frequency.value = 440;
		amp = audioContext.createGain();
		amp.gain.value = 0;
	
		// Connect oscillator to amp and amp to the mixer of the audioContext.
		// This is like connecting cables between jacks on a modular synth.
		oscillator.connect(amp);
		amp.connect(audioContext.destination);
		oscillator.start(0);
        // for vibrato, from the explanatory page at
        // http://music.arts.uci.edu/dobrian/s16/music147/examples/webaudio/html/vibrato.html
        modulatorOscillator = audioContext.createOscillator();
        modulatorOscillator.frequency.value = 6; // vibrato rate
        modulatorGain = audioContext.createGain();
        modulatorGain.gain.value = 0; // vibrato depth - 20 is good
        // Connect the LFO to its gain controller
        modulatorOscillator.connect(modulatorGain);
        // Connect the LFO's GainNode to the frequency AudioParam of the carrier
        modulatorGain.connect(oscillator.frequency);
        // start the modulator oscillator
        modulatorOscillator.start();
	}
}

// Set the frequency of the oscillator and start it running.
function startTone( frequency )
{
	var now = audioContext.currentTime;
	
	oscillator.frequency.setValueAtTime(frequency, now);
	
	// Ramp up the gain so we can hear the sound.
	// We can ramp smoothly to the desired value.
	// First we should cancel any previous scheduled events that might interfere.
	amp.gain.cancelScheduledValues(now);
	// Anchor beginning of ramp at current value.
	amp.gain.setValueAtTime(amp.gain.value, now);
	amp.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.1);
	
	//writeMessageToID( "soundStatus", "<p>Play tone at frequency = " + frequency  + "</p>");
}

function stopTone()
{
	var now = audioContext.currentTime;
	amp.gain.cancelScheduledValues(now);
	amp.gain.setValueAtTime(amp.gain.value, now);
	amp.gain.linearRampToValueAtTime(0.0, audioContext.currentTime + 1.0);
}

// init once the page has finished loading.
window.onload = initAudio;
