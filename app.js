var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.myText = '';
  $scope.showHint = false;
});

// 🐾 Filters
app.filter('catify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(חתול|cat)(?=\s|$)/gi, '🐈');
  };
});
app.filter('dogify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(כלב|dog)(?=\s|$)/gi, '🐕');
  };
});
app.filter('fishify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(דג|fish)(?=\s|$)/gi, '🐟');
  };
});
app.filter('bunnyify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(ארנב|bunny)(?=\s|$)/gi, '🐇');
  };
});
app.filter('lionify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(אריה|lion)(?=\s|$)/gi, '🦁');
  };
});
app.filter('snakeify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(נחש|snake)(?=\s|$)/gi, '🐍');
  };
});
app.filter('cowify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(פרה|cow)(?=\s|$)/gi, '🐄');
  };
});
app.filter('pigify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(חזיר|pig)(?=\s|$)/gi, '🐖');
  };
});
app.filter('frogify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(צפרדע|frog)(?=\s|$)/gi, '🐸');
  };
});
app.filter('monkeyify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(קוף|monkey)(?=\s|$)/gi, '🐒');
  };
});

app.filter('foxify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(שועל|fox)(?=\s|$)/gi, '🦊');
  };
});
app.filter('horseify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(סוס|horse)(?=\s|$)/gi, '🐎');
  };
});
app.filter('penguinify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(פינגווין|penguin)(?=\s|$)/gi, '🐧');
  };
});
app.filter('turtleify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(צב|turtle)(?=\s|$)/gi, '🐢');
  };
});
app.filter('zebraify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(זברה|zebra)(?=\s|$)/gi, '🦓');
  };
});
app.filter('sheepify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(כבשה|sheep)(?=\s|$)/gi, '🐑');
  };
});
app.filter('elephantify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(פיל|elephant)(?=\s|$)/gi, '🐘');
  };
});
app.filter('crocodileify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(תנין|crocodile)(?=\s|$)/gi, '🐊');
  };
});
app.filter('batify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(עטלף|bat)(?=\s|$)/gi, '🦇');
  };
});
app.filter('owlify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(ינשוף|owl)(?=\s|$)/gi, '🦉');
  };
});
app.filter('duckify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(ברווז|duck)(?=\s|$)/gi, '🦆');
  };
});
app.filter('swanify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(ברבור|swan)(?=\s|$)/gi, '🦢');
  };
});
app.filter('parrotify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(תוכי|parrot)(?=\s|$)/gi, '🦜');
  };
});
app.filter('octopusify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(תמנון|octopus)(?=\s|$)/gi, '🐙');
  };
});
app.filter('crabify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(סרטן|crab)(?=\s|$)/gi, '🦀');
  };
});
app.filter('squidify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(דיונון|squid)(?=\s|$)/gi, '🦑');
  };
});
app.filter('whaleify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(לוויתן|whale)(?=\s|$)/gi, '🐋');
  };
});
app.filter('hedgehogify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(קיפוד|hedgehog)(?=\s|$)/gi, '🦔');
  };
});
app.filter('slothify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(עצלן|sloth)(?=\s|$)/gi, '🦥');
  };
});
app.filter('kangarooify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(קנגורו|kangaroo)(?=\s|$)/gi, '🦘');
  };
});
app.filter('bisonify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(ביזון|bison)(?=\s|$)/gi, '🦬');
  };
});
app.filter('camelify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(גמל|camel)(?=\s|$)/gi, '🐫');
  };
});

// 🐾 Exam Controller
app.controller('ExamCtrl', function($scope) {
  $scope.animals = [
    { emoji: '🐈', heb: 'חתול', eng: 'cat' },
    { emoji: '🐕', heb: 'כלב', eng: 'dog' },
    { emoji: '🐟', heb: 'דג', eng: 'fish' },
    { emoji: '🐇', heb: 'ארנב', eng: 'bunny' },
    { emoji: '🦁', heb: 'אריה', eng: 'lion' },
    { emoji: '🐍', heb: 'נחש', eng: 'snake' },
    { emoji: '🐄', heb: 'פרה', eng: 'cow' },
    { emoji: '🐖', heb: 'חזיר', eng: 'pig' },
    { emoji: '🐸', heb: 'צפרדע', eng: 'frog' },
    { emoji: '🐒', heb: 'קוף', eng: 'monkey' },
    { emoji: '🐔', heb: 'תרנגול', eng: 'chicken' },
    { emoji: '🦊', heb: 'שועל', eng: 'fox' },
    { emoji: '🐎', heb: 'סוס', eng: 'horse' },
    { emoji: '🐧', heb: 'פינגווין', eng: 'penguin' },
    { emoji: '🐢', heb: 'צב', eng: 'turtle' },
    { emoji: '🦓', heb: 'זברה', eng: 'zebra' },
    { emoji: '🐑', heb: 'כבשה', eng: 'sheep' },
    { emoji: '🐘', heb: 'פיל', eng: 'elephant' },
    { emoji: '🐊', heb: 'תנין', eng: 'crocodile' },
    { emoji: '🦝', heb: 'דביבון', eng: 'raccoon' }
  ];

  $scope.index = 0;
  $scope.currentEmoji = $scope.animals[$scope.index].emoji;
  $scope.userAnswer = '';
  $scope.feedback = '';

  $scope.checkAnswer = function() {
    var answer = $scope.userAnswer.trim().toLowerCase();
    var animal = $scope.animals[$scope.index];
    if (answer === animal.heb || answer === animal.eng) {
      $scope.feedback = '�?תשובה נכונה!';
    } else {
      $scope.feedback = '�?נסה שוב!';
    }
  };

  $scope.nextAnimal = function() {
    $scope.index = ($scope.index + 1) % $scope.animals.length;
    $scope.currentEmoji = $scope.animals[$scope.index].emoji;
    $scope.userAnswer = '';
    $scope.feedback = '';
  };

  $scope.progressPercent = function() {
    return Math.round(($scope.index / $scope.animals.length) * 100);
  };

  $scope.progressStyle = function() {
    var percent = $scope.progressPercent();
    var bgColor = "#4caf50";
    if (percent < 40) bgColor = "#f44336";
    else if (percent < 70) bgColor = "#ff9800";
    return {
      width: percent + "%",
      backgroundColor: bgColor
    };
  };
});
