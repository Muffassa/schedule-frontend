(function(){
	"use strict";

	angular.module('app.routes').config(function($stateProvider, $urlRouterProvider){

		var getView = function(path){
			var viewName = path.substring(path.lastIndexOf('.') + 1, path.length);

			return './views/app/' + path.replace(/\./g, '/') + '/' + viewName + '.html';
		};

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('management', {
				abstract: true,
				url: '/management',
				views: {
					header: {
						templateUrl: getView('header')
					},
					main: {}
				},
                data: {
                    auth: true
                }
			})
			.state('management.dashboard', {
				url: '/',
				views: {
					'main@': {
						templateUrl: getView('management.management-dash')
					}
				}
			})
			.state('management.specialties-list', {
				url: '/specialties/',
				views: {
					'main@': {
						templateUrl: getView('management.specialty.specialties-list')
					}
				}
			})
			.state('management.specialty-details', {
				url: '/specialties/{id}/show/',
				views: {
					'main@': {
						templateUrl: getView('management.specialty.specialty-details')
					}
				}
			})
			.state('management.specialty-create', {
				url: '/specialties/create/',
				views: {
					'main@': {
						templateUrl: getView('management.specialty.specialty-create')
					}
				}
			})
			.state('management.specialty-edit', {
				url: '/specialties/{id}/edit/',
				views: {
					'main@': {
						templateUrl: getView('management.specialty.specialty-edit')
					}
				}
			})
			.state('management.troops-list', {
				url: '/troops/',
				views: {
					'main@': {
						templateUrl: getView('management.troop.troops-list')
					}
				}
			})
			.state('management.troop-create', {
				url: '/troops/create/',
				views: {
					'main@': {
						templateUrl: getView('management.troop.troop-create')
					}
				}
			})
			.state('management.troop-edit', {
				url: '/troops/{id}/edit/',
				views: {
					'main@': {
						templateUrl: getView('management.troop.troop-edit')
					}
				}
			})
			.state('management.disciplines-list', {
				url: '/disciplines/',
				views: {
					'main@': {
						templateUrl: getView('management.discipline.disciplines-list')
					}
				}
			})
			.state('management.discipline-create', {
				url: '/disciplines/create/',
				views: {
					'main@': {
						templateUrl: getView('management.discipline.discipline-create')
					}
				}
			})
			.state('management.discipline-edit', {
				url: '/disciplines/{id}/edit/',
				views: {
					'main@': {
						templateUrl: getView('management.discipline.discipline-edit')
					}
				}
			})
			.state('management.discipline-details', {
				url: '/disciplines/{id}/show/',
				views: {
					'main@': {
						templateUrl: getView('management.discipline.discipline-details')
					}
				}
			})
			.state('management.audiences-list', {
				url: '/audiences/',
				views: {
					'main@': {
						templateUrl: getView('management.audience.audiences-list')
					}
				}
			})
			.state('management.audience-create', {
				url: '/audiences/create/',
				views: {
					'main@': {
						templateUrl: getView('management.audience.audience-create')
					}
				}
			})
			.state('management.audience-edit', {
				url: '/audiences/{id}/edit/',
				views: {
					'main@': {
						templateUrl: getView('management.audience.audience-edit')
					}
				}
			})
			.state('management.teachers-list', {
				url: '/teachers/',
				views: {
					'main@': {
						templateUrl: getView('management.teacher.teachers-list')
					}
				}
			})
			.state('management.teacher-create', {
				url: '/teachers/create/',
				views: {
					'main@': {
						templateUrl: getView('management.teacher.teacher-create')
					}
				}
			})
			.state('management.teacher-edit', {
				url: '/teachers/{id}/edit/',
				views: {
					'main@': {
						templateUrl: getView('management.teacher.teacher-edit')
					}
				}
			})
			.state('management.themes-list', {
				url: '/disciplines/{id}/themes/',
				views: {
					'main@': {
						templateUrl: getView('management.theme.themes-list')
					}
				}
			})
			.state('management.theme-create', {
				url: '/disciplines/{id}/themes/create/',
				views: {
					'main@': {
						templateUrl: getView('management.theme.theme-create')
					}
				}
			})
			.state('management.theme-edit', {
				url: '/disciplines/{id}/themes/{themeId}/edit/',
				views: {
					'main@': {
						templateUrl: getView('management.theme.theme-edit')
					}
				}
			})
			.state('management.theme-details', {
				url: '/disciplines/{id}/themes/{themeId}/show/',
				views: {
					'main@': {
						templateUrl: getView('management.theme.theme-details')
					}
				}
			})
            .state('management.theme-type-list', {
                url: '/theme-types/',
                views: {
                    'main@': {
                        templateUrl: getView('management.theme-type.theme-type-list')
                    }
                }
            })
            .state('management.theme-type-create', {
                url: '/theme-types/create/',
                views: {
                    'main@': {
                        templateUrl: getView('management.theme-type.theme-type-create')
                    }
                }
            })
            .state('management.theme-type-edit', {
                url: '/theme-types/{id}/edit/',
                views: {
                    'main@': {
                        templateUrl: getView('management.theme-type.theme-type-edit')
                    }
                }
            })
			.state('management.teachers-statistic', {
				url: '/teachers-statistic/',
				views: {
					'main@': {
						templateUrl: getView('management.teacher.teacher-statistic')
					}
				}
			})
			.state('management.troops-statistic-list', {
				url: '/troops-statistic/',
				views: {
					'main@': {
						templateUrl: getView('management.troop.troop-statistic-list')
					}
				}
			})
			.state('management.troop-chart', {
				url: '/troop/{id}/chart/',
				views: {
					'main@': {
						templateUrl: getView('management.troop.troop-chart')
					}
				}
			});

			$stateProvider
				.state('auth', {
					abstract: true,
					main: {},
                    data: {
                        auth: false
                    }
				})
			.state('auth.login', {
				url: '/login/',
				views: {
					'main@': {
						templateUrl: getView('login')
					}
				}
			});

	});
})();
