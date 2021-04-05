$(document).ready(function () {
  //控制动画
  let flags = [false,false,false,false,false,false,false];
  //计算屏幕高度
  let h = $(window).height();
  $('#fullpage').fullpage({
    navigation: true,
    // 滚动速度，单位为毫秒
    scrollingSpeed: 1200,
    //回调函数,滚动到某一屏后调用
    //接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
    afterLoad: function (anchorLink, index) {
      // console.log(flag)
      if (index == 2 && flags[index-1] == false) {
        $(".next").fadeOut();
        $(".search_hid").show().animate({"margin-right": -111}, 1500, "easeOutBack", function () {
          //方块已居中
          $(".search_work").animate({"opacity": 1}, 500, function () {
            //文字显示
            //隐藏hid 显示blo
            // $(".search_work").css("display","none");
            // $(".search_blo").css("display","block");
            $(".search_hid").hide();
            $(".search_blo").show().animate({
              "height": 30,
              "margin-right": -275,
              "bottom": 449
            }, 1200);
            //和上移的search同时出现
            $(".sofas").show().animate({
              "margin-left": -220,
              "height": 218
            }, 1100);
            $(".text_blo").animate({"opacity": 1}, 500, function () {
              flags[index-1] = true;
              $(".next").fadeIn();
            });
          })
        });
      }
      if (index == 7 && flags[index-1] == false) {
        $(".next").hide();
        console.log("index7")
        //五星
        $(".star").animate({"width": "120px"}, 1200, function () {
          //好评
          $(".good").animate({"opacity": 1}, 500);
          flags[index-1] = true;
          $(".next").fadeIn();
        })
      }
    },
    //接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；
    // nextIndex 是滚动到的“页面”的序号，从1开始计算；direction 判断往上滚动还是往下滚动，值是 up 或 down
    onLeave: function (index, nextIndex, direction) {
      //每次滚动都隐藏next
      $(".next").fadeOut();
      if (index == 2 && nextIndex == 3 && direction == "down" && flags[nextIndex-1] == false) {
        $(".next").hide();
        $(".cover").show();
        // console.log(h-375)
        $(".selSofa").show().animate({"bottom": -(h - 375), "height": 166, "margin-left": -221}, 1000, function () {
          //sofa到选框中 显示size
          $(".selSofaIn").show()
          $(".selSize_blo").animate({"opacity": 1}, 1000);
          $(".btn_blo").animate({"opacity": 0}, 1000);
          $(".selSofa").hide()
          flags[nextIndex-1] = true;
          $(".next").fadeIn();
        });
      }
      if (index == 3 && nextIndex == 4 && direction == "down" && flags[nextIndex-1] == false) {
        $(".next").hide();
        //当第三页滚动到第四页之前 动作开始时
        $(".selSofaIn").hide()
        $(".shop_sofa").show().animate({"bottom": -(h - 255), "margin-left": -90}, 1000, function () {
          // console.log(123)
          $(".shop_sofaIn").show()
          $(".shop_sofa").hide()
          $(".shop_car").animate({"margin-left": 1000}, 2000, "easeInElastic", function () {
            $(".address").animate({"opacity": 1}, 1000);
            $(".info").animate({"opacity": 1}, 1000);
            $(".shop_text_blo").animate({"opacity": 1}, 1000);
            flags[nextIndex-1] = true;
            $(".next").fadeIn();
            
          })
        })
      }
      if (index == 4 && nextIndex == 5 && direction == "down" && flags[nextIndex-1] == false) {
        $(".next").hide();
        //沙发与手同时做动作
        $(".pay_sofa").show().animate({"bottom": 230}, 3000, "easeOutBack")
        $(".pay_hand").animate({"bottom": -25}, 1400, function () {
          //点击鼠标动作
          $(".mouse_blo").animate({"opacity": 1}, 500, function () {
            //银行信息弹出
            $(".pay_order").animate({"bottom": 400}, 1000, "easeOutBack");
            //显示文字
            //弹出同时文字翻转
            $(".pay_word").addClass("ani_words").animate({"opacity": 1}, 500);
            flags[nextIndex-1] = true;
            $(".next").fadeIn();
          })
        })
      }
      if (index == 5 && nextIndex == 6 && direction == "down" && flags[nextIndex-1] == false) {
        
        //让沙发掉落
        console.log(h - 600)
        $(".pay_sofa2").show().animate({
          "bottom": -(h - 590),
          "margin-left": -145,
          "width": 80,
        }, 1200,)
        //沙发掉落同时用盒子接住
        $(".box").show().animate({"margin-left": -168}, 1200, function () {
          $(".pay_sofa2").hide()
          //box装沙发完成 开车
          $(".box").animate({"bottom": 33}, 1000, function () {
            $(".pack_text").show().animate({"margin-left": "40%"}, 1500, "easeOutBack");
            $(".section6").animate({"background-position-x": "100%"}, 3000, function () {
              //送货
              $(".man").show().animate({
                "bottom": "118px",
                "width": "252px",
                "opacity": 1
              }, 1200, function () {
                $(".man").animate({
                  "right": "600px"
                }, 500, function () {
                  //开门
                  $(".door").show().animate({}, 1000, function () {
                    $(".women").animate({
                      "opacity": 1,
                      "width": "87px"
                    }, 500, function () {
                      $(".women").show().animate({
                        "right": "450px"
                      }, 500, function () {
                        $(".shouhuo").show()
                        flags[nextIndex-1] = true;
                        $(".next").fadeIn();
                      })
                    })
                  })
                })
              })
            })
          })
        })
      }
    }
  });
})