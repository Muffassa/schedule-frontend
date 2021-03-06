(function () {
    "use strict";

    angular.module('app.services').factory('ThemeTypeService', function ($http) {
        return new ThemeTypeService($http);
    });

    function ThemeTypeService($http) {
        var url = 'https://vk-schedule.omgtu.ru/api/v1/theme_type/';

        var serialize = function (theme_type) {
            return {
                name: theme_type.name,
                short_name: theme_type.short_name
            }
        };

        this.all = function () {
            return $http.get(url);
        };

        this.get = function (id) {
            return $http.get(url + id + '/');
        };

        this.create = function (theme) {
            return $http.post(url, serialize(theme));
        };

        this.update = function (theme) {
            return $http.put(url + theme.id + '/', serialize(theme));
        };

        this.delete = function (theme) {
            return $http.delete(url + theme.id + '/', serialize(theme));
        };
    }

})();
