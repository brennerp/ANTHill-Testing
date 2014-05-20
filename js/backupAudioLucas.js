			
(function () {
	"use strict";
	
	fluid.registerNamespace("audioLucas");
	
	flock.init();
	
	fluid.defaults("audioLucas.first", {
		gradeNames: ["flock.synth", "autoInit"],
				
				synthDef: {
					id: "carrier",
					ugen: "flock.ugen.triOsc",
					freq: 100,
					mul: 1,
				}
		}); //FINISH FIRST SYNTH
		
		//Stereo Bell, usin Decay

	fluid.defaults("audioLucas.bell", {
		gradeNames: ["flock.synth", "autoInit"],
			synthDef: [
				{
					id: "lefty",
					ugen: "flock.ugen.decay",
					source: {
						ugen: "flock.ugen.impulse",
						rate: "audio",
						freq: {
							ugen: "flock.ugen.xLine",
							rate: "control",
							start: 1,
							end: 1,
							duration: 1
						},
						mul: 0.25
					},
					time: 0.2,
					mul: {
						ugen: "flock.ugen.triOsc",
						freq: 600,
						mul: 1,
					}
				},

				{
					id: "righty",
					ugen: "flock.ugen.decay",
					source: {
						ugen: "flock.ugen.impulse",
						rate: "audio",
						freq: {
							ugen: "flock.ugen.xLine",
							rate: "control",
							start: 1,
							end: 1,
							duration: 1
						},
						mul: 0.25
					},
					time: 0.2,
					mul: {
						ugen: "flock.ugen.triOsc",
						freq: 300,
						mul: 1,
					}
				}
			]
});
	
}());