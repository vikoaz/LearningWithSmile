var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.myText = '';
  $scope.showHint = false;
});


app.filter('tableify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(שולחן|table)(?=\s|$)/gi, ' 🪑 ');
  };
});
app.filter('chairify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(כיסא|chair)(?=\s|$)/gi, ' 🪑 ');
  };
});
app.filter('bedify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(מיטה|bed)(?=\s|$)/gi, ' 🛏️ ');
  };
});
app.filter('doorify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(דלת|door)(?=\s|$)/gi, ' 🚪 ');
  };
});
app.filter('windowify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(חלון|window)(?=\s|$)/gi, ' 🪟 ');
  };
});
app.filter('phoneify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(טלפון|phone)(?=\s|$)/gi, ' 📱 ');
  };
});
app.filter('computerify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(מחשב|computer)(?=\s|$)/gi, ' 💻 ');
  };
});
app.filter('televisionify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(טלוויזיה|television)(?=\s|$)/gi, ' 📺 ');
  };
});
app.filter('lampify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(מנורה|lamp)(?=\s|$)/gi, ' 💡 ');
  };
});
app.filter('bookify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(ספר|book)(?=\s|$)/gi, ' 📘 ');
  };
});
app.filter('notebookify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(מחברת|notebook)(?=\s|$)/gi, ' 📓 ');
  };
});
app.filter('penify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(עט|pen)(?=\s|$)/gi, ' 🖊️ ');
  };
});
app.filter('pencilify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(עיפרון|pencil)(?=\s|$)/gi, ' ✏️ ');
  };
});
app.filter('bagify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(תיק|bag)(?=\s|$)/gi, ' 🎒 ');
  };
});
app.filter('bottleify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(בקבוק|bottle)(?=\s|$)/gi, ' 🍼 ');
  };
});
app.filter('cupify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(ספל|cup)(?=\s|$)/gi, ' 🥤 ');
  };
});
app.filter('plateify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(צלחת|plate)(?=\s|$)/gi, ' 🍽️ ');
  };
});
app.filter('forkify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(מזלג|fork)(?=\s|$)/gi, ' 🍴 ');
  };
});
app.filter('knifeify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(סכין|knife)(?=\s|$)/gi, ' 🔪 ');
  };
});
app.filter('spoonify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(כפית|spoon)(?=\s|$)/gi, ' 🥄 ');
  };
});
app.filter('clockify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(שעון|clock)(?=\s|$)/gi, ' ⏰ ');
  };
});
app.filter('pictureify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(תמונה|picture)(?=\s|$)/gi, ' 🖼️ ');
  };
});
app.filter('mirrorify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(מראה|mirror)(?=\s|$)/gi, ' 🪞 ');
  };
});
app.filter('carpetify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(שטיח|carpet)(?=\s|$)/gi, ' 🧶 ');
  };
});
app.filter('sofaify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(ספה|sofa)(?=\s|$)/gi, ' 🛋️ ');
  };
});
app.filter('armchairify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(כורסה|armchair)(?=\s|$)/gi, ' 🪑 ');
  };
});
app.filter('closetify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(ארון|closet)(?=\s|$)/gi, ' 🚪 ');
  };
});
app.filter('fridgeify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(מקרר|fridge)(?=\s|$)/gi, ' 🧊 ');
  };
});
app.filter('ovenify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(תנור|oven)(?=\s|$)/gi, ' 🔥 ');
  };
});
app.filter('stoveify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(כיריים|stove)(?=\s|$)/gi, ' 🍳 ');
  };
});
app.filter('microwaveify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(מיקרוגל|microwave)(?=\s|$)/gi, ' 📡 ');
  };
});
app.filter('washingmachineify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(מכונת כביסה|washing machine)(?=\s|$)/gi, ' 🧺 ');
  };
});
app.filter('dryerify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(מייבש|dryer)(?=\s|$)/gi, ' 🌀 ');
  };
});
app.filter('sinkify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(כיור|sink)(?=\s|$)/gi, ' 🚰 ');
  };
});
app.filter('toiletify', function() {
  return function(input) {
    if (!input) return '';
    return input.replace(/(?:\s|^)(אסלה|toilet)(?=\s|$)/gi, ' 🚽 ');
  };
});


app.controller('ExamCtrl', function($scope) {
  $scope.objects = [
    
    { emoji: '🪑', heb: 'כיסא', eng: 'chair' },
    { emoji: '🛏️', heb: 'מיטה', eng: 'bed' },
    { emoji: '🚪', heb: 'דלת', eng: 'door' },
    { emoji: '🪟', heb: 'חלון', eng: 'window' },
    { emoji: '📱', heb: 'טלפון', eng: 'phone' },
    { emoji: '💻', heb: 'מחשב', eng: 'computer' },
    { emoji: '📺', heb: 'טלוויזיה', eng: 'television' },
    { emoji: '💡', heb: 'מנורה', eng: 'lamp' },
    { emoji: '📘', heb: 'ספר', eng: 'book' },
    { emoji: '📓', heb: 'מחברת', eng: 'notebook' },
    { emoji: '🖊️', heb: 'עט', eng: 'pen' },
    { emoji: '✏️', heb: 'עיפרון', eng: 'pencil' },
    { emoji: '🎒', heb: 'תיק', eng: 'bag' },
    { emoji: '🍼', heb: 'בקבוק', eng: 'bottle' },
    { emoji: '🥤', heb: 'ספל', eng: 'cup' },
    { emoji: '🍽️', heb: 'צלחת', eng: 'plate' },
    { emoji: '🍴', heb: 'מזלג', eng: 'fork' },
    { emoji: '🔪', heb: 'סכין', eng: 'knife' },
    { emoji: '🥄', heb: 'כפית', eng: 'spoon' },	
    { emoji: '⏰', heb: 'שעון', eng: 'clock' },
    { emoji: '🖼️', heb: 'תמונה', eng: 'picture' },
    { emoji: '🪞', heb: 'מראה', eng: 'mirror' },
    { emoji: '🧶', heb: 'שטיח', eng: 'carpet' },
    { emoji: '🛋️', heb: 'ספה', eng: 'sofa' },
    { emoji: '🪑', heb: 'כורסה', eng: 'armchair' },
    { emoji: '🚪', heb: 'ארון', eng: 'closet' },
    { emoji: '🧊', heb: 'מקרר', eng: 'fridge' },
    { emoji: '🔥', heb: 'תנור', eng: 'oven' },
    { emoji: '🍳', heb: 'כיריים', eng: 'stove' },
    { emoji: '📡', heb: 'מיקרוגל', eng: 'microwave' },
    { emoji: '🧺', heb: 'מכונת כביסה', eng: 'washing machine' },
    { emoji: '🌀', heb: 'מייבש', eng: 'dryer' },
    { emoji: '🚰', heb: 'כיור', eng: 'sink' },
    { emoji: '🚽', heb: 'אסלה', eng: 'toilet' }
  ];

  $scope.index = 0;
  $scope.currentEmoji = $scope.objects[$scope.index].emoji;
  $scope.userAnswer = '';
  $scope.feedback = '';

  $scope.checkAnswer = function() {
    var answer = $scope.userAnswer.trim().toLowerCase();
    var object = $scope.objects[$scope.index];
    if (answer === object.heb || answer === object.eng) {
      $scope.feedback = '✅ תשובה נכונה!';
    } else {
      $scope.feedback = '❌ נסה שוב!';
    }
  };

  $scope.nextObject = function() {
    $scope.index = ($scope.index + 1) % $scope.objects.length;
    $scope.currentEmoji = $scope.objects[$scope.index].emoji;
    $scope.userAnswer = '';
    $scope.feedback = '';
  };

  $scope.progressPercent = function() {
    return Math.round(($scope.index / $scope.objects.length) * 100);
  };

  $scope.progressStyle = function() {
    var percent = $scope.progressPercent();
    var bgColor = "#4caf50"; // ירוק
    if (percent < 40) bgColor = "#f44336"; // אדום
    else if (percent < 70) bgColor = "#ff9800"; // כתום

    return {
      width: percent + "%",
      backgroundColor: bgColor
    };
  };
});
