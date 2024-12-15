const idioms = [
    {
        question: "一丘之貉",
        options: ["品性相同的壞人", "互相幫助的好友", "獨來獨往的人", "性格迥異的人"],
        correctAnswer: 0,
        explanation: "比喻彼此都是同類的壞人，沒有什麼差別。"
    },
    {
        question: "一目了然",
        options: ["視力很好", "一眼就看清楚", "眼花繚亂", "視而不見"],
        correctAnswer: 1,
        explanation: "一看就很清楚明白。"
    },
    {
        question: "一言九鼎",
        options: ["說話沒有分量", "說話不算話", "說話很有分量", "說話太多"],
        correctAnswer: 2,
        explanation: "形容說話很有分量，非常有信用。"
    },
    {
        question: "一針見血",
        options: ["醫術高明", "說話直接命中要害", "傷害他人", "縫紉技術好"],
        correctAnswer: 1,
        explanation: "比喻說話直接切中要害，非常準確。"
    },
    {
        question: "守株待兔",
        options: ["靈活變通", "坐等好運", "勤勞致富", "謹慎小心"],
        correctAnswer: 1,
        explanation: "比喻死守著老方法，希望僥倖成功。"
    },
    {
        question: "一心一意",
        options: ["專心致志", "心不在焉", "三心二意", "心猿意馬"],
        correctAnswer: 0,
        explanation: "形容非常專心，沒有其他雜念。"
    },
    {
        question: "一見如故",
        options: ["互相討厭", "一見鍾情", "相見恨晚", "老死不相往來"],
        correctAnswer: 2,
        explanation: "第一次見面就像老朋友一樣親切。"
    },
    {
        question: "一帆風順",
        options: ["諸事不順", "一路順利", "波濤洶湧", "舉步維艱"],
        correctAnswer: 1,
        explanation: "比喻事情進行非常順利。"
    },
    {
        question: "一鳴驚人",
        options: ["默默無聞", "平平無奇", "聲名大噪", "籍籍無名"],
        correctAnswer: 2,
        explanation: "比喻平時沒有什麼名聲，一下子做出驚人的成就。"
    },
    {
        question: "一箭雙鵰",
        options: ["一次解決兩件事", "射不中目標", "一事無成", "事倍功半"],
        correctAnswer: 0,
        explanation: "比喻一個舉動同時達到兩個目的。"
    },
    {
        question: "一絲不苟",
        options: ["馬馬虎虎", "粗心大意", "認真嚴謹", "隨隨便便"],
        correctAnswer: 2,
        explanation: "形容做事非常認真仔細，一點都不馬虎。"
    },
    {
        question: "一塵不染",
        options: ["骯髒不堪", "清清白白", "混濁不清", "蓬頭垢面"],
        correctAnswer: 1,
        explanation: "比喻清白純潔，沒有沾染一點污垢。"
    },
    {
        question: "一舉兩得",
        options: ["事倍功半", "一箭雙鵰", "一無所獲", "功虧一簣"],
        correctAnswer: 1,
        explanation: "一個行動得到兩種好處。"
    },
    {
        question: "一落千丈",
        options: ["步步高升", "平步青雲", "急劇下降", "蒸蒸日上"],
        correctAnswer: 2,
        explanation: "形容地位、價格等急劇下降。"
    },
    {
        question: "一知半解",
        options: ["學識淵博", "略知一二", "無所不知", "博古通今"],
        correctAnswer: 1,
        explanation: "對事物只了解一部分，不完全理解。"
    },
    {
        question: "一言九鼎",
        options: ["輕諾寡信", "出爾反爾", "言而有信", "朝令夕改"],
        correctAnswer: 2,
        explanation: "形容說話很有分量，非常有信用。"
    },
    {
        question: "一言為定",
        options: ["說話算數", "朝三暮四", "反覆無常", "出爾反爾"],
        correctAnswer: 0,
        explanation: "答應的事情一定要做到。"
    },
    {
        question: "一言難盡",
        options: ["無話可說", "話多囉嗦", "說不完的話", "三言兩語"],
        correctAnswer: 2,
        explanation: "有很多話要說，一時說不完。"
    },
    {
        question: "一視同仁",
        options: ["厚此薄彼", "偏心眼兒", "一碗水端平", "與人為善"],
        correctAnswer: 2,
        explanation: "對待所有人都完全一樣，不偏不倚。"
    },
    {
        question: "一針見血",
        options: ["繞彎子說", "直截了當", "拐彎抹角", "旁敲側擊"],
        correctAnswer: 1,
        explanation: "比喻說話直接命中要害。"
    },
    {
        question: "一鼓作氣",
        options: ["半途而廢", "持之以恆", "一氣呵成", "三心二意"],
        correctAnswer: 2,
        explanation: "趁著勇氣和幹勁一口氣把事情做完。"
    },
    {
        question: "一模一樣",
        options: ["大同小異", "似是而非", "完全相同", "略有差異"],
        correctAnswer: 2,
        explanation: "兩個東西完全相同，沒有區別。"
    },
    {
        question: "一暴十寒",
        options: ["持之以恆", "時冷時熱", "三天打魚", "堅持不懈"],
        correctAnswer: 2,
        explanation: "比喻學習或做事沒有恆心，時常中斷。"
    },
    {
        question: "一葉知秋",
        options: ["明察秋毫", "由表及裡", "舉一反三", "以小見大"],
        correctAnswer: 3,
        explanation: "從一片落葉可以知道秋天來臨，比喻從小事可以推知大事。"
    },
    {
        question: "一諾千金",
        options: ["輕諾寡信", "言而有信", "出爾反爾", "朝令夕改"],
        correctAnswer: 1,
        explanation: "比喻說話算數，答應的事情一定要做到。"
    },
    {
        question: "一馬當先",
        options: ["敬而遠之", "落後他人", "領先他人", "畏首畏尾"],
        correctAnswer: 2,
        explanation: "比喻領先或帶頭。"
    },
    {
        question: "一敗塗地",
        options: ["大獲全勝", "慘敗而歸", "小有損失", "略勝一籌"],
        correctAnswer: 1,
        explanation: "形容失敗得很慘，一點希望都沒有。"
    },
    {
        question: "一擲千金",
        options: ["一毛不拔", "揮金如土", "省吃儉用", "精打細算"],
        correctAnswer: 1,
        explanation: "形容花錢大方，毫不吝惜。"
    },
    {
        question: "一勞永逸",
        options: ["一次解決", "重複勞累", "半途而廢", "事倍功半"],
        correctAnswer: 0,
        explanation: "辛苦一次，以後就可以永遠安逸。"
    },
    {
        question: "一成不變",
        options: ["與時俱進", "一直不變", "日新月異", "推陳出新"],
        correctAnswer: 1,
        explanation: "形容事物沒有變化，總是保持原來的樣子。"
    },
    {
        question: "一日千里",
        options: ["原地踏步", "慢慢前進", "進步神速", "停滯不前"],
        correctAnswer: 2,
        explanation: "形容進步或發展得很快。"
    },
    {
        question: "一日三秋",
        options: ["時光飛逝", "度日如年", "歲月如梭", "光陰似箭"],
        correctAnswer: 1,
        explanation: "形容思念情深，一天好像三年那麼長。"
    },
    {
        question: "一見鍾情",
        options: ["日久生情", "漸漸喜歡", "一見傾心", "相見恨晚"],
        correctAnswer: 2,
        explanation: "第一次見面就產生愛情。"
    }
];
