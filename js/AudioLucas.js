//var myaudio = new Audio('mysong.mp3');
			// Create a new synth consisting of a sine wave,
			// modulating its amplitude slowly with another sine wave.
			
(function () {
	"use strict";
	
	fluid.registerNamespace("audioLucas");
	
	flock.init();
	
	//AudioLucas.play = function () {
	fluid.defaults("audioLucas.first", {
		gradeNames: ["flock.synth", "autoInit"],
				
				synthDef: {
					id: "carrier",
					ugen: "flock.ugen.pinkNoise",
					freq: 12.5,
					mul: {
						id: "mod",
						ugen: "flock.ugen.sinOsc",
						freq: 2.0,
						mul: {
							id:"modmod",
							ugen: "flock.ugen.triOsc",
							freq: 0.5,
							mul: {
								ugen: "flock.ugen.filter.biquad.lp",
								freq: {
									ugen: "flock.ugen.sin",
									rate: "control",
									freq: {
										
										ugen: "flock.ugen.xLine",
										rate: "control",
										start: 0.5,
										end: 8,
										duration: 4,
									},
									phase: 0,
									mul: 3600,
									add: 4000,
								},
								source: {
									 
									 ugen: "flock.ugen.whiteNoise",
									 freq: 12.5,
									 mul: {
										 id: "trem",
										ugen: "flock.ugen.env.simpleASR",
										start: 0.0,
										attack: 0.0625,
										sustain: 0.5,
										release: 1,
										gate: {
											ugen: "flock.ugen.impulse",
											rate: "control",
											freq: 0.75,
											phase: 0,
										}
									}
								}
							}
						}
					}
				} 
		}); //FINISH FIRST SYNTH
		
		fluid.defaults("audioLucas.second", {
			gradeNames: ["flock.synth", "autoInit"],
			synthDef: {
				id: "carrier",
				ugen: "flock.ugen.lfPulse",
				freq: 100,
				mul: {
					id: "mod",
					ugen: "flock.ugen.sinOsc",
					freq: 1.0,
					mul: {
					   id:"modmod",
						ugen: "flock.ugen.lfPulse",
						freq: 1.5,
						mul: 0.0150,
					}
				}
			}
		});  //FINISH SECOND SYNTH
		
		fluid.defaults("audioLucas.third", {
			gradeNames: ["flock.synth", "autoInit"],
				synthDef: {
				id: "carrier",
				ugen: "flock.ugen.lfPulse",
				freq: 50,
				mul: {
					id: "mod",
					ugen: "flock.ugen.sinOsc",
					freq: 2.0,
					mul: {
						id:"modmod",
						ugen: "flock.ugen.triOsc",
						freq: 0.5,
						mul: {
							ugen: "flock.ugen.filter.biquad.lp",
							freq: {
								ugen: "flock.ugen.sin",
								rate: "control",
								freq: {
									ugen: "flock.ugen.xLine",
									rate: "control",
									start: 0.5,
									end: 8,
									duration: 4,
								},
								phase: 0,
								mul: 3600,
								add: 4000,
							},
							source: {
								 ugen: "flock.ugen.lfSaw",
								 freq: 100,
								 mul: 0.1,
							}
						}
					}
				}
			}
		});  //FINISH THIRD SYNTH

	//variation = synth.get("source.sustain");
	//console.log(variation);
	
}());