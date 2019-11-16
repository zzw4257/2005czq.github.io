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
        name: 'You',
        artist: 'Approaching Nirvana',
        url: 'http://stor.cloudmusics.cn/mp3/2019/10/fa69608d601bf0d4dcd3840c42f3fa14.m4a',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002pbbi522kCF0.jpg',
        lrc: '[00:00.00] 纯音乐'
      },
      {
        name: 'So Long (feat. Madi)',
        artist: 'Slushii,Madi',
        url: 'http://stor.cloudmusics.cn/mp3/2019/10/b0b3c3ba8ad07cb132ff6840510b0ed0.m4a',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000047DUD92mmszN.jpg',
        lrc: '[00:00.00]So Long (feat. Madi) (再见) - Slushii/Madi\n[00:26.79]It was the year\n[00:28.22]I didn’t check the terms and conditions of your heart dear\n[00:32.04]You wrote out your song that swept into the summer of it all\n[00:37.66]It was the time your momma warned us all you were gone\n[00:44.85]She told me love had fixed you turned you wrong\n[00:47.62]That winter you were calling out your song song oh\n[00:52.78]You know I want the best in you\n[01:36.36]Hey boy give me back your love\n[01:39.71]Won’t you hinder to my heart and we sit among the stars\n[01:45.57]The stars ooh yeah ooh yeah\n[01:52.53]Stars\n[01:55.77]It was the time your momma warned us all you were gone\n[02:04.88]She told me love had fixed you turned you wrong\n[02:07.03]That winter you were calling out your song\n[02:10.22]Let’s go\n[02:12.50]Song oh'
      },
      {
        name: 'Alan Walker - Faded Alone (Albim Mashup)',
        artist: 'Jming',
        url: 'http://stor.cloudmusics.cn/mp3/2019/10/dbc5fb552f5caa049ce211fced6e7989.m4a',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000XlwZG0RZKji.jpg',
        lrc: '[00:00.29]Alan Walker - Faded Alone (Albim Mashup) - Jming\n[00:01.14]Written by：Alan Walker/Jesper Borgen/Anders Froen/Gunnar Greve Pettersen\n[00:01.74]You were the shadow to my light\n[00:16.43]Did you feel us\n[00:18.86]Another star you fade away\n[00:23.81]Afraid our aim is out of sight\n[00:27.17]Wanna see us alight\n[00:32.47]I see apart but still together\n[00:39.30]I feel anything for you\n[00:44.67]I see apart but still together\n[00:49.76]I feel\n[00:53.50]I know I’m not alone\n[00:56.38]At least we are together\n[01:00.39]Under the sea\n[01:01.71]I know I know\n[01:05.65]Apart but still together\n[01:11.24]The monster’s running wild inside of me\n[01:15.47]I’m faded\n[01:17.17]Under the sea\n[01:23.48]I know I know\n[01:26.83]Apart but still together\n[01:32.13]The monster’s running wild inside of me\n[01:36.70]I’m faded'
      },
      {
        name: 'Limitless',
        artist: 'Sam F,Sophie Rose',
        url: 'https://attachment.mc.0sm.com/node0/2019/11/85DD020C9EBCB5FE-36d6dc5926b17006.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001P3iiN1yuFxN.jpg',
        lrc: '[00:00.00]Limitless (无限制) - Sam F/Sophie Rose\n[00:06.28]Written by：Linsey Saunders/Meron Ryan/Sam Fishman/Sophie Rose\n[00:12.57]Moonlight burning in our eyes\n[00:14.67]We are we are\n[00:17.27]Too high for the better life\n[00:20.45]We’re stars we’re stars\n[00:23.53]Lay your head down forget your worries\n[00:27.45]This is where where we belong\n[00:30.56]Moonlight burning in our eyes\n[00:33.80]We are we are\n[00:36.10]Caught in a daydream holding onto something\n[00:40.16]Just beyond our fingertips\n[00:42.06]Stuck in a feeling love the heavy breathing\n[00:46.23]I can taste it on my lips\n[00:48.15]Limitless\n[00:51.79]Burning up the sky all the night\n[00:54.32]Limitless\n[00:57.26]Wanna feel the fire let me take you high\n[01:00.70]Limitless ooh ooh\n[01:06.60]Limitless ooh ooh\n[01:12.49]Limitless limitless limitless\n[01:32.53]Starlight in our impulsive night\n[01:40.63]We are we are\n[01:43.40]Children of different kind\n[01:46.61]We’re stars we’re stars\n[01:49.66]Listen to the rhythm of the heartbeat\n[01:53.81]Let the sound ignite your soul\n[01:56.55]Starlight in our impulsive night\n[01:59.41]We are we are\n[02:02.25]Caught in a daydream holding onto something\n[02:06.11]Just beyond our fingertips\n[02:08.13]Stuck in a feeling love the heavy breathing\n[02:12.40]I can taste it on my lips\n[02:14.33]Limitless\n[02:17.94]Burning up the sky all the night\n[02:20.69]Limitless\n[02:23.99]Wanna feel the fire let me take you high\n[02:26.73]Limitless ooh ooh\n[02:32.81]Limitless ooh ooh\n[02:38.96]Limitless limitless limitless\n[02:58.57]We are\n[03:20.83]We are'
      },
      {
        name: 'Chat',
        artist: '天宅',
        url: 'https://attachment.mc.0sm.com/node0/2019/11/85DD020CF1277196-cbf7033a02310e88.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001Oz1S32WcMhX.jpg',
        lrc: '[00:00.00] 纯音乐'
      },
      {
        name: 'melon',
        artist: 'Ocha',
        url: 'https://attachment.mc.0sm.com/node0/2019/11/85DD020D4E795D6B-b211ce0da2355a42.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000u54NR3L88aM.jpg',
        lrc: '[00:00.00] 纯音乐'
      },
      {
        name: 'Can We Kiss Forever',
        artist: 'Kina',
        url: 'https://attachment.mc.0sm.com/node0/2019/11/85DD020C783C5F46-792411896f02e610.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000w3T1H3s6HI7.jpg',
        lrc: '[00:00.37]Can We Kiss Forever - Kina\n[00:09.42]I tried to reach you I can’t hide\n[00:13.77]How strong’s the feeling when we dive\n[00:18.16]I crossed the ocean of my mind\n[00:22.69]My wounds are healing with the salt\n[00:26.81]All my senses intensified\n[00:31.16]Whenever you and I we dive\n[00:35.82]I crossed the ocean of my mind\n[00:39.63]But in the end I drown\n[00:41.82]You push me down down\n[01:44.87]All the shame\n[01:52.55]When you called my name\n[02:02.25]I felt pain\n[02:11.00]When you came'
      },
      {
        name: 'Lanterns',
        artist: 'Xomu',
        url: 'https://attachment.mc.0sm.com/node0/2019/11/85DD020D7171A2CD-4f04a0630fcf1718.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000030lvdT2eIANQ.jpg',
        lrc: '[00:00.00] 纯音乐'
      }
    ]
});