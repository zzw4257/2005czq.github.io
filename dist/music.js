const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#66ccff',
    order: 'list',
    loop: 'all',
    lrcType: 1,
    audio: [
      {
        name: 'Umbrella (Remix)',
        artist: 'Matte',
        url: 'http://stor.cloudmusics.cn/mp3/2019/09/aa47c745b1eaef37ddf08c7520bf08d5.m4a',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001ZlIW129YZ2C.jpg',
        lrc: '[00:00.72]Umbrella (Remix) - Matte\n[00:12.02]You have my heart\n[00:14.25]We’ll never be worlds apart\n[00:17.21]Maybe in magazines\n[00:20.33]But you’ll still be my star\n[00:23.20]Baby ’cause in the dark\n[00:26.25]You can’t see shiny cars\n[00:29.50]And that’s when you need me there\n[00:32.26]With you I’ll always share\n[00:35.69]Because\n[00:37.41]When the sun shines we’ll shine together\n[00:40.43]Told you I’d be here forever\n[00:43.40]Said I’ll always be a friend\n[00:46.24]Took an oath I’ma stick it out ’til the end\n[00:49.41]Now that it’s raining more than ever\n[00:52.50]Know that we’ll still have each other\n[00:55.53]You can stand under my umbrella\n[00:58.55]You can stand under my umbrella\n[01:01.89]Ella ella eh eh eh\n[01:05.46]Under my umbrella\n[01:07.63]Ella ella eh eh eh\n[01:11.66]Under my umbrella\n[01:13.73]Ella ella eh eh eh\n[01:17.46]Under my umbrella\n[01:19.74]Ella ella eh eh eh eh\n[01:47.33]You can stand under my umbrella\n[01:50.12]Ella ella eh eh eh\n[01:53.97]Under my umbrella\n[01:56.12]Ella ella eh eh eh\n[02:00.06]Under my umbrella\n[02:02.21]Ella ella eh eh eh\n[02:06.20]Under my umbrella\n[02:08.25]Ella ella eh eh eh eh\n[02:13.58]These fancy things will never come in between\n[02:18.61]You’re part of my entity here for infinity\n[02:24.79]When the war has took it’s part\n[02:27.69]When the world has dealt it’s cards\n[02:31.13]If the hand is hard together we’ll mend your heart\n[02:37.45]Because\n[02:39.00]When the sun shines we’ll shine together\n[02:41.89]Told you I’d be here forever\n[02:44.81]Said I’ll always be a friend\n[02:47.60]Took an oa that I’ma stick it out ’til the end\n[02:50.76]Now that it’s raining more than ever\n[02:53.88]Know that we’ll still have each other\n[02:56.98]You can stand under my umbrella\n[03:00.06]You can stand under my umbrella\n[03:03.05]Ella ella eh\n[03:07.13]Under my umbrella\n[03:09.09]Ella ella eh\n[03:12.58]You can stand under my umbrella\n[03:15.16]Ella ella eh\n[03:19.29]Under my umbrella\n[03:21.49]Ella ella eh eh eh eh eh eh\n[04:15.11]It’s raining\n[04:17.27]Oh baby it’s raining\n[04:19.63]You can always come here to me\n[04:24.07]Come here to me\n[04:27.21]It’s raining\n[04:29.32]Oh baby it’s raining\n[04:31.96]You can always come here to me\n[04:36.09]Come here to me'
      },
      {
        name: 'Fractures',
        artist: 'ILLENIUM,Nevve',
        url: 'http://stor.cloudmusics.cn/mp3/2019/09/40ba0e5c6ce2a1b63a5f4ce6345dddf6.m4a',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002MnZiA4Vtkq8.jpg',
        lrc: '[00:00.00]Fractures (破裂) - ILLENIUM/Nevve\n[00:25.44]Burning everything I know\n[00:29.40]Desperate for a change\n[00:33.83]Crashing down the ancient roads\n[00:41.65]Past our yesterday\n[00:46.93]Maybe there is hunger in my blood\n[00:52.29]Screaming out loud for what I want\n[00:58.37]See me running full speed at it\n[01:04.21]Shattering collide\n[01:06.20]Call it post traumatic\n[01:10.30]Now it’s do or die\n[01:11.74]Coming after tiny fractures\n[01:15.55]Coming after tiny fractures\n[01:21.55]See me running full speed at it\n[01:27.60]Coming after tiny fractures\n[01:30.55]Call me post traumatic\n[01:33.60]Nothing’s after tiny fractures\n[01:36.53]Coming after tiny fractures\n[01:42.63]Coming after\n[01:45.69]Coming after tiny fractures\n[01:54.51]Coming after\n[01:58.11]Coming after tiny fractures\n[02:03.26]Coming after\n[02:05.07]Coming after tiny fractures\n[02:09.27]Coming after\n[02:11.18]Feeding frenzy is in my brain\n[02:17.46]I’m hopeful every day\n[02:21.89]I gotta get it while we are still young enough to break\n[02:29.83]We’re finally not afraid\n[02:35.19]Maybe there is hunger in my blood\n[02:40.23]Screaming out loud for what I want\n[02:46.33]See me running full speed at it\n[02:51.65]Shattering collide\n[02:54.14]Call me post traumatic\n[02:58.24]Now it’s do or die\n[02:59.65]Coming after tiny fractures\n[03:03.40]Coming after tiny fractures\n[03:09.67]See me running full speed at it\n[03:16.22]Coming after tiny fractures\n[03:18.52]Call me post traumatic\n[03:21.28]Coming after tiny fractures\n[03:24.54]Coming after tiny fractures\n[03:30.48]Coming after\n[03:33.79]Coming after tiny fractures\n[03:42.55]Coming after\n[03:46.08]Coming after tiny fractures\n[03:51.31]Coming after\n[03:53.10]Coming after tiny fractures\n[03:57.36]Coming after'
      },
      {
        name: 'China',
        artist: '习谱予',
        url: 'http://stor.cloudmusics.cn/mp3/2019/09/15a63f9eba06681f831365abb85d75e9.m4a',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000002upcg2OZITt.jpg',
        lrc: '[00:00.00]China - 习谱予\n[00:14.03]我想到北京去看艳阳\n[00:17.30]我想到呼伦贝尔歌唱\n[00:22.26]我想到南沙去听海浪\n[00:27.83]我想到喜马拉雅眺望\n[00:33.12]看高山 看河川 看海岸\n[00:38.69]看不完 这华夏 的美景\n[00:43.72]去寻找 去远方 去流浪\n[00:49.41]去不够 那想到 的地方\n[00:54.63]This is for China\n[00:56.66]This is for China\n[01:01.94]This is for China\n[01:07.39]This is for China\n[01:12.70]我想到甘南去闻花香\n[01:42.46]我想到澎湖湾去荡漾\n[01:47.74]我想到丽江忘记时光\n[01:53.16]我想到戈壁滩上闯荡\n[01:58.55]看高山 看河川 看海岸\n[02:04.04]看不完 这华夏 的美景\n[02:09.14]去寻找 去远方 去流浪\n[02:14.70]去不够 那想到 的地方\n[02:19.89]This is for China\n[02:22.07]This is for China\n[02:24.70]This is for China\n[02:27.34]My love for China\n[02:30.08]This is for China\n[02:32.74]My love for China\n[02:35.46]This is for China\n[02:37.92]This is for China\n[03:04.73]This is for China\n[03:09.94]This is for China\n[03:15.28]This is for China\n[03:20.55]This is for China'
      },
      {
        name: 'Light',
        artist: 'San Holo',
        url: 'http://stor.cloudmusics.cn/mp3/2019/09/e5f4c64e5f53192dab5aa777b1470839.m4a',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004WLmjg32gmET.jpg',
        lrc: '[00:00.01]Light (光亮) - San Holo\n[00:00.02]Written by：Sander Van Dijck/Tessa Douwstra/Arie Storm\n[00:00.03]Just wanna see\n[00:01.55]I just wanna see the light\n[00:02.73]I just wanna see\n[00:04.82]I just wanna see the light\n[00:05.89]I just wanna see\n[00:07.99]I just wanna see the light\n[00:09.07]I just wanna see the light\n[00:11.31]Even if it makes me blind\n[00:28.88]I just wanna see the light\n[00:30.59]Breathing leave it all behind\n[00:34.67]I just wanna see the light\n[00:36.88]Even if it makes me blind\n[00:41.40]I just wanna see the light\n[00:43.12]Breathing leave it all behind\n[00:47.47]I just wanna see the light\n[00:49.69]I just wanna see the light\n[01:05.94]I just wanna see the light\n[01:07.42]I just wanna see the light\n[01:09.08]I just wanna see the light\n[01:10.20]Light light light light light light light\n[01:13.23]I just wanna see the light\n[01:16.80]I just wanna see the light\n[01:41.02]Even if it makes me blind\n[01:58.07]I just wanna see the light\n[01:59.93]Breathing leave it all behind\n[02:04.29]I just wanna see the light\n[02:06.40]Even if it makes me blind\n[02:10.69]I just wanna see the light\n[02:12.73]Breathing leave it all behind\n[02:17.15]I just wanna see the light\n[02:19.09]Even if it makes me blind\n[02:23.62]I just wanna see the light\n[02:25.69]Breathing leave it all behind\n[02:29.99]I just wanna see the light\n[02:32.00]I just wanna see the light\n[02:35.62]I just wanna see the light\n[02:37.13]I just wanna see the light\n[02:38.69]I just wanna see the light\n[02:40.31]Light light light light light light light\n[02:42.90]I just wanna see the light\n[02:46.47]I just wanna see the light\n[03:10.57]I just wanna see\n[03:13.60]I just wanna see the light\n[03:14.86]I just wanna see\n[03:16.94]I just wanna see the light\n[03:18.07]I just wanna see\n[03:20.05]I just wanna see the light\n[03:21.19]I just wanna see the light\n[03:23.31]I just wanna see the light\n[03:36.12]Even if it makes me blind\n[03:40.56]Even if it makes me blind'
      },
      {
        name: 'Euphoria',
        artist: 'IA (イア),じん (自然之敌p)',
        url: 'http://stor.cloudmusics.cn/mp3/2019/10/e95aab30661ee334f1f3be8fc71416fd.m4a',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001qnJSQ0Daeta.jpg',
        lrc: '[00:00.00]Euphoria - IA (イア)/じん (自然之敌p)\n[00:06.63]词：じん\n[00:13.26]曲：じん\n[00:19.90]その日眺めていた光景は\n[00:23.69]映く青い空が染んでいて\n[00:27.70]不意にカランとした教室に\n[00:31.02]君はもういなかった\n[00:34.95]昨日読めなかった小説を\n[00:39.17]消えない夢を見ていた少年は\n[00:43.63]赤く光る星を追っていた\n[00:47.08]それの１つになりたかった\n[00:50.92]いつも触れ合えば願うこと\n[00:55.20]もどかしい言葉が窓を使う\n[00:59.12]最終の電車の窓に映り込む\n[01:03.28]自分は誰に見える\n[01:07.79]ああ青春のありかは\n[01:10.64]こんなにいるの\n[01:12.60]見つかてないから\n[01:14.69]今日で何でだって\n[01:16.50]落ちた移れだって\n[01:18.61]探してるんだろう\n[01:20.59]探してるんだろう\n[01:22.30]少年の僕らは\n[01:26.72]情熱な君が\n[01:28.70]約束のまま\n[01:30.51]消えてしまうなら\n[01:32.47]過ぎ去ってしまうなら\n[01:34.56]ここに残そう\n[01:37.59]思い世界にだけだったの\n[01:41.06]道の向こうには自分がいて\n[01:59.15]あどけない笑顔で呼んでいる\n[02:03.60]きっと先に辿り着いたんだ\n[02:07.10]消えないうちに行かなくちゃ\n[02:11.34]気づかになれば痛むほど\n[02:15.30]進むべき志士が強く浮かぶ\n[02:19.08]始まりの合図に\n[02:21.03]この音が鳴る\n[02:23.14]変わらないいつのままで\n[02:27.52]最初は誰かのものばかりの\n[02:32.50]まだ先にあるから\n[02:34.59]祈る音の価値を\n[02:36.71]幼い心の前\n[02:38.56]過ぎててるだろう\n[02:40.74]続けてるだろう\n[02:42.19]少年の僕らは\n[02:46.55]暖かいな日々は\n[02:48.62]ずっとこれから\n[02:50.60]二人の奥で\n[02:52.61]心の底で\n[02:54.56]いつか輝く\n[02:57.77]君はもう気づいてるんだろう\n[03:01.07]不安と消えないと恐怖\n[03:17.93]乗り着いてて\n[03:19.60]躊躇いまま羽ばたくんだ\n[03:23.42]自然とその場所が理由になるんで\n[03:27.62]誰よりも期待してる\n[03:30.47]少年の僕らは\n[03:34.62]心の中に戸惑いがあるなら\n[03:38.52]きっとそれ次第だ\n[03:40.68]きっとこの世界で\n[03:42.85]口は綺麗で\n[03:44.45]眩しい思いだろう\n[03:46.86]青春の絵から\n[03:50.58]その一ページの\n[03:52.53]そのさり気なく\n[03:54.56]君を選んで\n[03:56.63]泣きそうな声で\n[03:58.56]そっと呟く\n[04:01.69]同じ世界に向かってだと\n[04:05.03]同じ未来に勝ってるだと'
      },
      {
        name: '追梦赤子心',
        artist: 'GALA',
        url: 'http://stor.cloudmusics.cn/mp3/2019/10/0682e3a4f2aa28a76f668b1683e44e97.m4a',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003uDUds09qQHp.jpg',
        lrc: '[00:00.00]追梦赤子心 (《那年那兔那事儿 第一季》动画片尾曲) - GALA (旮旯)\n[00:03.80]词：苏朵\n[00:07.61]曲：苏朵\n[00:11.41]编曲：甘虎\n[00:15.22]充满鲜花的世界到底在哪里\n[00:21.26]如果它真的存在那么我一定会去\n[00:28.72]我想在那里最高的山峰矗立\n[00:34.20]不在乎它是不是悬崖峭壁\n[00:41.81]用力活着用力爱哪怕肝脑涂地\n[00:47.89]不求任何人满意只要对得起自己\n[00:55.41]关于理想我从来没选择放弃\n[01:00.82]即使在灰头土脸的日子里\n[01:07.48]也许我没有天分\n[01:10.84]但我有梦的天真\n[01:14.19]我将会去证明用我的一生\n[01:20.86]也许我手比较笨\n[01:24.14]但我愿不停探寻\n[01:27.53]付出所有的青春不留遗憾\n[01:34.51]向前跑 迎着冷眼和嘲笑\n[01:40.78]生命的广阔不历经磨难怎能感到\n[01:47.46]命运它无法让我们跪地求饶\n[01:54.56]就算鲜血洒满了怀抱\n[02:01.17]继续跑 带着赤子的骄傲\n[02:07.45]生命的闪耀不坚持到底怎能看到\n[02:14.52]与其苟延残喘不如纵情燃烧吧\n[02:22.49]有一天会再发芽\n[02:28.77]未来迷人绚烂总在向我召唤\n[03:01.27]哪怕只有痛苦作伴也要勇往直前\n[03:08.69]我想在那里最蓝的大海扬帆\n[03:14.55]绝不管自己能不能回还\n[03:20.76]失败后郁郁寡欢\n[03:24.13]那是懦夫的表现\n[03:27.51]只要一息尚存请握紧双拳\n[03:34.10]在天色破晓之前\n[03:37.46]我们要更加勇敢\n[03:40.72]等待日出时最耀眼的瞬间\n[03:47.97]向前跑 迎着冷眼和嘲笑\n[03:53.99]生命的广阔不历经磨难怎能感到\n[04:00.79]命运它无法让我们跪地求饶\n[04:07.89]就算鲜血洒满了怀抱\n[04:14.53]继续跑 带着赤子的骄傲\n[04:20.77]生命的闪耀不坚持到底怎能看到\n[04:27.50]与其苟延残喘不如纵情燃烧吧\n[04:35.65]为了心中的美好\n[04:42.42]不妥协直到变老'
      },
      {
        name: '骄傲的少年',
        artist: '南征北战NZBZ',
        url: 'http://stor.cloudmusics.cn/mp3/2019/10/74290eb9134e9f44f73dd77d04f3dc2f.m4a',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002TY2251wLIpu.jpg',
        lrc: '[00:00.00]骄傲的少年 (《那年那兔那些事儿 第二季》动画片尾曲) - 南征北战NZBZ\n[00:05.65]词：赵辰龙\n[00:11.30]曲：汀洋\n[00:16.95]编曲：汀洋\n[00:22.60]在一开始\n[00:24.18]当初我还是\n[00:26.84]一个天真而又爱哭的孩子\n[00:32.38]十年之后\n[00:35.66]终于才明白\n[00:38.44]只要全力以赴就无所谓失败\n[00:44.05]转眼间\n[00:48.19]一切都已改变\n[00:51.18]新的起点新的世界就在眼前\n[00:56.53]受过伤\n[00:59.85]也流过了眼泪\n[01:02.66]为了梦想疯狂\n[01:04.80]这一次又怎样\n[01:08.36]奔跑吧\n[01:10.67]骄傲的少年\n[01:13.79]年轻的心里面\n[01:16.53]是坚定的信念\n[01:20.39]燃烧吧\n[01:21.91]骄傲的热血\n[01:25.97]胜利的歌我要再唱一遍\n[01:31.81]世界之大\n[01:59.12]总想要去飞\n[02:01.46]就算满身伤痕也不曾后悔\n[02:06.95]无人喝彩\n[02:10.48]依然在期待\n[02:13.41]雨后的彩虹它是那样的精彩\n[02:18.29]转眼间\n[02:22.50]一切都已改变\n[02:25.53]新的起点新的世界就在眼前\n[02:30.85]受过伤\n[02:33.83]也流过了眼泪\n[02:36.76]为了梦想疯狂\n[02:39.06]这一次又怎样\n[02:42.68]奔跑吧\n[02:44.84]骄傲的少年\n[02:48.10]年轻的心里面\n[02:50.80]是坚定的信念\n[02:54.53]燃烧吧\n[02:56.25]骄傲的热血\n[03:00.30]胜利的歌我要再唱一遍\n[03:06.56]如今我整装待发\n[03:07.99]充满正能量\n[03:09.31]学会坚强的面对\n[03:10.81]生命的真相\n[03:12.22]成功或失败不是由结果去衡量\n[03:15.09]挫折和磨难只会让我变得更强\n[03:17.96]经受过屈辱和嘲笑那又怎样\n[03:20.80]胜利的使命仍然背负在我身上\n[03:23.65]年轻的旋律多么自由而奔放\n[03:26.51]放飞你的心\n[03:27.66]勇敢大声唱\n[03:28.91]奔跑吧\n[03:30.47]骄傲的少年\n[03:33.82]年轻的心里面\n[03:36.45]是坚定的信念\n[03:40.16]燃烧吧\n[03:41.95]骄傲的热血\n[03:45.92]胜利的歌我要再唱一遍\n[03:51.80]奔跑吧\n[03:53.38]骄傲的少年\n[03:56.74]年轻的心里面\n[03:59.42]是坚定的信念\n[04:03.10]燃烧吧\n[04:04.83]骄傲的热血\n[04:08.82]胜利的歌我要再唱一遍'
      },
      {
        name: 'Fly Away',
        artist: 'TheFatRat,Anjulie',
        url: 'http://stor.cloudmusics.cn/mp3/2019/10/e514b73913c770d00868d67ff02c2ac1.m4a',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M00000202MwY3sXGPC.jpg',
        lrc: '[00:00.00]Fly Away (飞离) - TheFatRat/Anjulie\n[00:06.65]Written by：Christian Buttner/John Dang\n[00:13.31]Come and fly away with me\n[00:15.71]Come and fly away with me e e e e\n[00:19.90]Come and fly away with me\n[00:22.57]Co co come and fly away with me e e e e e e\n[00:26.36]Come and fly away with me\n[00:28.74]Come and fly away with me e e e e\n[00:32.85]Come and fly away with me\n[00:35.55]Co co come and fly away with me e e e e e e\n[00:39.32]Don’t you be afraid\n[00:40.52]Everything will change\n[00:41.72]You and I\n[00:42.50]Jumping off the edge\n[00:43.65]They say dreamers never die\n[00:45.27]So come and fly\n[00:46.46]Come and fly\n[00:47.27]Come and fly away with me\n[00:50.38]We’re rising we’re falling\n[00:55.30]We’ll make it through\n[00:58.46]We’re climbing we’re soaring\n[01:01.80]A thousand views\n[01:04.85]We’re rising we’re falling\n[01:08.79]We’ll make it through\n[01:11.27]We’re climbing we’re soaring\n[01:14.64]A thousand views\n[01:17.83]Somewhere by the end we’ll see\n[01:36.75]Where the moon and water meet\n[01:39.95]Somewhere close to harmony\n[01:43.30]When the world is sound asleep\n[01:46.46]Something’s gonna bring a change\n[01:49.93]Journeys we are meant to take\n[01:53.00]Something at the edge of space\n[01:56.27]Calling us to fly away\n[01:59.33]Don’t you be afraid\n[02:01.53]Everything will change\n[02:02.74]You and I\n[02:03.58]Jumping off the edge\n[02:04.70]They say dreamers never die\n[02:06.35]So come and fly\n[02:07.54]Come and fly\n[02:08.34]Come and fly away with me\n[02:11.68]We’re rising we’re falling\n[02:16.90]We’ll make it through\n[02:19.75]We’re climbing we’re soaring\n[02:23.26]A thousand views\n[02:26.15]We’re rising we’re falling\n[02:29.43]We’ll make it through\n[02:32.69]We’re climbing we’re soaring\n[02:35.86]A thousand views\n[02:38.52]Come and fly away\n[02:40.33]Come and\n[02:40.73]Come and fly away\n[02:41.91]Come and fly away with me\n[02:45.10]Come and fly away\n[02:46.89]Come and\n[02:47.31]Come and fly away\n[02:48.97]Come and fly away with me\n[02:51.49]Something’s gonna bring a change\n[02:58.52]Journeys we are meant to take\n[03:01.06]Something at the edge of space\n[03:04.34]Calling us to fly away'
      },
      {
        name: 'Jackpot',
        artist: 'TheFatRat',
        url: 'http://stor.cloudmusics.cn/mp3/2019/10/b1148815fc25ca2beef3a2828aa7cc9c.m4a',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003oaS2A08mIJi.jpg',
        lrc: '[00:00.00] 纯音乐'
      },
      {
        name: '征程 (纯歌版)',
        artist: 'O2O偶像男团,三无Marblue,冥月,颜糙糙',
        url: 'http://stor.cloudmusics.cn/mp3/2019/10/6f06b3a6a3f468b428a5b031db5cf6c8.m4a',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002VYtms0JXAcm.jpg',
        lrc: '[00:00.00]征程 (纯歌版) (凹凸世界20P群像) - O2O偶像男团/三无Marblue/冥月/颜糙糙\n[00:02.57]词：温酒\n[00:02.88]曲：谭朝月\n[00:03.27]策划：小狮子\n[00:03.73]编曲：彭轩\n[00:04.12]剧情后期：温酒\n[00:04.67]剧情编剧/片尾BGM：荟小荟\n[00:05.52]和声设计：ShareYoung\n[00:05.99]分轨混音：Gong骏\n[00:06.54]混音：Anony\n[00:06.85]曲绘/PV：猫菇椰汁\n[00:07.47]音乐制作：O2O男团\n[00:08.25]金|演唱：三无MarBlue|配音：连\n[00:09.26]格瑞|演唱：玄羽(玄月sama)|配音：琴且歌\n[00:10.74]紫堂幻|演唱：余夏(朱强)|配音：浮游\n[00:12.22]凯莉|演唱：少年霜|配音：亿口井Dr\n[00:13.55]嘉德罗斯|演唱：醉雪|配音：DKK\n[00:14.71]雷德|演唱：耀璟臣(Yoji)\n[00:15.57]蒙特祖玛|演唱：颜糙糙\n[00:16.43]雷狮|演唱：耀璟臣(Yoji)|配音：林中人\n[00:17.83]卡米尔|演唱：Link(闻人归)|配音：默铃\n[00:19.23]帕洛斯|演唱：司斓(清雅)|配音：倒霉死勒\n[00:20.87]佩利|演唱：Shin(夏耀心)\n[00:21.72]安迷修|演唱：仁一(许任一)|配音：小恒\n[00:23.28]艾比|演唱：小小萱|配音：shourei\n[00:24.37]埃米|演唱：Mini兔(兔阿)\n[00:25.30]丹尼尔|演唱：Assen捷|配音：小白\n[00:26.47]银爵|演唱：棣樋(小T_T-Tone)|配音：泠泉夜月\n[00:28.11]小黑洞|演唱：魏晨夕(尘溪)\n[00:29.20]秋|演唱：檀霊|配音：shourei\n[00:30.13]鬼狐天冲|演唱：Zen(凤冴Sae)|配音：流川鱼\n[00:31.61]莱娜|演唱：冥月\n[00:32.24]搬运人|配音：泠泉夜月\n[00:33.09]神1|配音：薄荷君\n[00:33.79]神2|配音：方小明\n[00:34.49]丹尼尔（Assen捷）：\n[00:35.04]背负公正审判为神旨代言\n[00:42.38]白衣黑星用可能引领无限\n[00:47.55]格瑞（玄羽）：\n[00:49.95]所见皆可斩 刀锋中裹挟执念\n[00:53.54]习惯了缄默无言\n[00:55.41]痛苦一力承担\n[00:57.38]独行于世间\n[00:59.26]温柔被隐匿在视野之外\n[01:03.57]嘉德罗斯（ShareYoung）：\n[01:04.81]以力诠释王之典范\n[01:06.59]以自身为狂妄加冕\n[01:08.60]以无知而无畏擎天 目空一切\n[01:12.11]雷德（和声：蒙特祖玛）/耀璟臣（和声：颜糙糙）：\n[01:12.74]以杀戮为改造起点\n[01:14.32]以爱将心意外点燃\n[01:16.20]以风为方向勇往直前\n[01:19.61]凯莉（少年霜）：\n[01:20.30]月刃滑翔狩猎乐园\n[01:21.82]星镖碰撞末世狂欢\n[01:23.69]天真与恶毒分开两半\n[01:26.81]紫堂幻（余夏）：\n[01:27.62]从召唤中驯服试炼\n[01:29.47]从弱小到打破平凡\n[01:31.38]尝试着比肩\n[01:33.06]金（三无）：\n[01:35.24]曾无忧无虑的少年\n[01:37.08]如今开启征程了吧\n[01:38.96]为苦难里煎熬星辰\n[01:40.92]绽希望之花\n[01:43.04]矢量化身利刃\n[01:44.64]心愿中投影强大\n[01:47.24]这幸福并非唾手可得啊\n[01:50.42]用同伴定义的法则\n[01:52.37]与彼此信任也没差\n[01:54.38]金（和声：紫堂幻）/ 三无（和声：余夏） ：\n[01:54.84]并肩作战才不叫傻瓜\n[01:57.78]格瑞/金（和声：紫堂幻/凯莉）/玄羽/三无（和声：余夏/少年霜）：\n[01:58.48]记忆中嫌弃脸颊\n[02:00.04]终于写成牵绊了吗\n[02:03.59]要携手前行啊\n[03:07.10]没有马却有信仰的剑和铠\n[03:11.71]安迷修（和声：艾比/埃米）/仁一（和声：小小萱/Mini兔）：\n[03:14.68]左手善良右手对邪恶宣战\n[03:19.55]鬼狐（ZEN）：\n[03:22.29]自定义棋盘 操纵与能言善辩\n[03:25.76]面具下遮蔽的眼\n[03:27.64]蛊惑潜藏危险\n[03:29.37]莱娜（冥月）：\n[03:29.99]环抱的双肩\n[03:31.58]已注定的结局可还情愿\n[03:35.39]雷狮（耀璟臣）：\n[03:37.31]以放肆立宇宙之巅\n[03:38.97]以狡诈寻自由航线\n[03:40.83]王子到海盗的极端 堕落甘甜\n[03:44.27]卡米尔（LINK）：\n[03:44.87]以理智规划出未来\n[03:46.56]以忠诚为夺冠铺垫\n[03:48.47]以信任做他唯一弱点\n[03:51.75]佩利（SHIN）：\n[03:52.38]底层杀出大道平坦\n[03:54.17]亡命之徒长成狂犬\n[03:56.16]斗不过被愚弄的缺陷\n[03:59.28]帕洛斯（司斓）：\n[04:00.20]从镌刻贪婪到习惯\n[04:01.86]从微笑编织出假面\n[04:03.61]生存即正确\n[04:05.64]合：\n[04:07.65]有强力者所向披靡\n[04:09.53]有末位到第一逆袭\n[04:11.36]有英雄的赛场之上\n[04:13.30]从不缺奇迹\n[04:15.36]有梦埋在心底\n[04:17.09]为实现至死不渝\n[04:19.82]有斗志昂扬不认输的你\n[04:22.41]秋/黑洞/丹尼尔：\n[04:23.07]察觉所谓规则秘密\n[04:24.69]不过取悦创世神灵\n[04:26.60]光明同黑暗腥风血雨\n[04:30.66]干脆制造场闹剧\n[04:32.57]总好过关在镜子里\n[04:35.94]一轮轮重启\n[04:37.86]全：\n[04:38.09]命运该掌握在自己\n[04:39.97]怎么能按剧本演绎\n[04:41.95]拒绝打发时间的游戏\n[04:45.66]不反抗才徒留笑柄\n[04:47.61]不如赌一把未知的局\n[04:51.19]最多一败涂地'
      }
    ]
});