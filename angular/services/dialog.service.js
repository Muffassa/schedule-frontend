(function(){
	"use strict";

	angular.module("app.services").factory('DialogService', function($mdDialog){

		return {
			fromTemplate: function(template, $scope){

				var options = {
					templateUrl: './views/dialogs/' + template + '/' + template + '.html'
				};

				if ($scope){
					options.scope = $scope.$new();
				}

				return $mdDialog.show(options);
			},

			hide: function(){
				return $mdDialog.hide();
			},

			alert: function(title, content){
				$mdDialog.show(
					$mdDialog.alert()
						.title(title)
						.content(content)
						.ok('Ok')
				);
			},

			confirm: function(title, content) {
				return $mdDialog.show(
					$mdDialog.confirm()
						.title(title)
						.content(content)
						.ok('Ok')
						.cancel('Cancel')
				);
			},

			delete: function(content){
				return $mdDialog.show(
					$mdDialog.confirm()
						.title('Подтверждение удаления')
						.content(content)
						.ok('Удалить')
						.cancel('Отмена')
				);
			},
			action: function(content, okButton){
				return $mdDialog.show(
					$mdDialog.confirm()
						.title('')
						.content(content)
						.ok(okButton)
						.cancel('Отмена')
				);
			}
		};
	});
})();
