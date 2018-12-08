app.factory('httpService', ['$http', '$q', function ($http, $q) {
  return {
    getData: getData
  }

  function getData () {
    return $http.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(function (response) {
        return response.data
      },
      function (errResponse) {
        return $q.reject(errResponse)
      }
      )
  }
}])
