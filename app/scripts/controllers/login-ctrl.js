'use strict';
/**
 * @ngdoc function
 * @name coinioApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
var errorCode;

angular.module('coinioApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $q, Ref, $timeout) {
    $scope.oauthLogin = function(provider) {
      $scope.err = null;
      Auth.$authWithOAuthPopup(provider, {rememberMe: true}).then(redirect, showError);
    };

    $scope.anonymousLogin = function() {
      $scope.err = null;
      Auth.$authAnonymously({rememberMe: true}).then(redirect, showError);
    };

    $scope.passwordLogin = function(email, pass) {
      $scope.err = null;
      firebase.auth().signInWithEmailAndPassword(email, pass).then(
        redirect, showError
      );
    };

    $scope.createAccount = function(email, username, pass, confirm) {
      if(firebase.auth().currentUser) {
        console.log("User already signed in", firebase.auth().currentUser.uid)
      } else {
        $scope.err = null;
        if( !pass ) {
          $scope.err = 'Please enter a password';
        }
        else if( pass !== confirm ) {
          $scope.err = 'Passwords do not match';
        } else if(pass.length < 6) {
          $scope.err = 'Passwords must be at least 6 characters';
        }
        else {
          firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
            // Handle Errors here.
            errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log("^1");
            // ...
            }).then(function () {
              // authenticate so we have permission to write to Firebase
              return firebase.auth().signInWithEmailAndPassword(email, pass);
            })
            .then(createProfile)
            .then(redirect, showError);
            //if (!errorCode){
              console.log(errorCode);
              console.log("^2");
              console.log(firebase.auth().currentUser.uid)
              storeUserData(firebase.auth().currentUser.uid, username, email); 
        //}
      }
    }

      function storeUserData(userId, username, email) {
        firebase.database().ref('users/' + username).set({
          userId: userId,
          email: email,
          timestamp: firebase.database.ServerValue.TIMESTAMP
        });
      }

      function createProfile(user) {
        var ref = Ref.child('users', user.uid), def = $q.defer();
        ref.set({email: email, name: firstPartOfEmail(email)}, function(err) {
          $timeout(function() {
            if( err ) {
              def.reject(err);
            }
            else {
              def.resolve(ref);
            }
          });
        });

        return def.promise;
      }
    };

    function firstPartOfEmail(email) {
      return ucfirst(email.substr(0, email.indexOf('@'))||'');
    }

    function ucfirst (str) {
      // inspired by: http://kevin.vanzonneveld.net
      str += '';
      var f = str.charAt(0).toUpperCase();
      return f + str.substr(1);
    }

  

    function redirect() {
      $location.path('/account');
    }

    function showError(err) {
      $scope.err = err;
    }


  });
