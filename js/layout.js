$(document).scroll(function() {
  var mh = $("main").offset().top;
  var dh = $(this).scrollTop();
  if (dh >= 200) {
    $('#nav').addClass('nav-container-white');
  } else {
    $('#nav').removeClass('nav-container-white');
  }
});

// banner所在的索引
var index = -1;
// banner
var $BANNER = $('.banner');
// banner总数
var size = $BANNER.length;
// 小圆圈
var $SPOT = $('.spot');
// 圆圈样式
var SPOT_ACTIVE = 'spot-active';

// 滚动方法
var scrollFun = function(isInit) {
  var prev = index;
  // 重新定位索引
  index++;
  index = index == size ? 0 : index;
  // 滚动小圆圈
  $SPOT.removeClass(SPOT_ACTIVE);
  $SPOT.eq(index).addClass(SPOT_ACTIVE);

  // 将当前的banner滚出至左边
  if (prev >= 0) {
    // 滚动banner
    $BANNER.eq(prev).stop().animate({
      left: '-100%'
    }, function() {
      $BANNER.eq(prev).css({
        left: '100%'
      });
    });
  }

  if (isInit) {
    // 将右边的banner滚入至当前
    $BANNER.eq(index).css({
      left: '0'
    });
  } else {
    // 将右边的banner滚入至当前
    $BANNER.eq(index).stop().animate({
      left: '0'
    });
  }
};

// 定时任务
setInterval(scrollFun, 5000);
// 初始化
scrollFun(true);
