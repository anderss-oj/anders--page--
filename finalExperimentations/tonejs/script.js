import * as Tone from 'tone';
import $ from 'jquery';

//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
$ ('.click').click(function(){
    synth.triggerAttackRelease("C4", "8n");
    console.log('its clicked')
})