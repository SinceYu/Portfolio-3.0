module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		watch:{
			files:['**/*.{scss,sass}'],
			tasks:['compass:dev']
			},
			

			jshint:	{
				jsFiles: ['js/apps/*.js','js/*.js']
			
			},
			
			uglify:{
                 options: {
                     mangle: true
                    },
				my_target:{
					files: {
                            'js/apps/jquery.rollDisk.min.js': ['js/apps/jquery.rollDisk.js'],
							'js/apps/jquery.scrollNav.min.js': ['js/apps/jquery.scrollNav.js']
                            }
						}
			},
			
			compass:{	
				dev:{
					options:{
						sassDir: 'sass',
						cssDir: 'css',
						raw: 'preferred_syntax = :scss', // Use `raw` since it's not directly available
						environment:'development',
                        clean:true
					}
				}

		}
		

		
				
	});


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	
	
	//grunt.registerTask('default', ["jshint","uglify"]);
	
	grunt.registerTask('default', ["jshint","compass:dev","watch"]);
	
	
};