var array_fang = [
    ["麻黄汤", "桂枝汤","九味羌活汤","小青龙汤", "败毒散", "桑菊饮", "银翘散", "麻杏石甘汤", "止嗽散", "香苏散", "正柴胡饮", "柴葛解肌汤", "葱豉桔梗汤", "参饮苏", "再造散", "麻黄附子细辛汤", "加减葳蕤汤", "葱白七味饮", "升麻葛根汤"],
    ["大承气汤", "大黄牡丹汤", "温脾汤", "麻子仁丸", "济川煎","大陷胸汤","大黄附子细辛汤","三物备急丸","五仁丸","黄龙汤","新加黄龙汤","增液承气汤","十枣汤","舟车丸"],
    ["小柴胡汤", "大柴胡汤", "蒿芩清胆汤", "四逆散", "逍遥散", "半夏泻心汤", "防风通圣散","蒿苓清胆汤","达原饮","痛泻要方","葛根黄芩黄连汤","疏凿饮子"],
    ["白虎汤", "竹叶石膏汤", "清营汤", "清瘟败毒饮", "凉膈散", "仙方活命饮", "龙胆泄心汤", "苇茎汤", "清胃散", "葛根芩连汤", "芍药汤", "白头翁汤", "清暑益气汤", "香苏散","犀角地黄汤","黄连解毒汤","普济消毒饮","导赤散","左金丸","泻白散","玉女煎","六一散","桂苓甘露散","青蒿鳖甲汤","清骨散","当归六黄汤","清络饮"],
    ["理中丸", "小建中汤", "吴茱萸汤", "四逆汤", "回阳救急汤", "暖肝煎", "阳和汤","当归四逆汤","桂枝五物汤"],
    ["四君子汤", "参苓白术汤", "补中益气汤", "生脉散", "人参蛤蚧汤", "四物汤", "归脾汤", "六味地黄汤", "一贯煎", "肾气丸", "地黄饮子","玉屏风散","完带汤","当归补血汤","八珍汤","炙甘草汤","泰山磐石饮","左归丸","大补阴丸","百合固金汤","补肺阿胶汤","二至丸","十补丸","右归丸","龟鹿二仙胶","七宝美丹","补天大造丸"],
    ["牡蛎散", "真人养脏汤", "四神汤", "桃花汤", "桑螵蛸散", "固冲汤", "固经汤", "易黄汤","九仙散","金锁固精丸","缩泉丸"],
    ["朱砂安神丸", "天王补心丹", "酸枣仁汤","磁朱丸","养心汤","甘麦大枣汤"],
    ["安宫牛黄丸", "苏合香丸","紫雪苏恭方","至宝丹","行军散","紫金锭"],
    ["越鞠丸","半夏厚朴汤","柴胡疏肝散", "苏子降气汤", "定喘汤", "旋覆代赭汤","枳实燕白桂枝汤","四磨汤","瓜蒌韭白白酒汤","半夏厚朴汤","厚朴温中汤","金铃子散","天台乌药散","加味乌药汤","橘皮竹茹汤","丁香柿蒂汤"],
    ["桃核承气汤", "血府逐瘀汤", "补阳还五汤", "复元活血汤", "温经汤", "生化汤", "桂枝茯苓丸", "咳血方", "黄龙汤", "黄土汤","丹参饮","大黄蛰虫丸","十灰散","四生丸","小蓟饮子","槐花散"],
    ["川芎茶调散", "大秦艽汤", "羚角钩藤汤", "镇肝熄风汤", "天麻钩藤饮","小活络丹","牵正散","玉真散","消风散","大定风珠"],
    ["清燥救肺汤", "养阴润肺汤","杏苏散","桑杏汤","麦门冬汤","益胃汤","玉液汤","琼玉膏","增液汤"],
    ["平胃散", "藿香正气散", "茵陈蒿汤", "八正散", "五苓散", "真武汤", "实脾汤", "独活寄生汤","三仁汤","甘露消毒丹","连朴饮","当归痛汤","二妙散","猪苓汤","防己黄芪汤","五皮散","苓桂术甘汤","甘草干姜茯苓白术汤","真武汤","萆薢分清散","羌活胜湿汤"],
    ["二陈汤", "温胆汤", "清气化痰汤", "半夏白术天麻汤","茯苓丸","十味温胆汤","小陷胸汤","滚痰丸","贝母瓜蒌散","苓甘五味姜辛汤","三子养亲汤"],
    ["保和丸", "健脾丸","枳实导滞丸","木香槟榔丸","枳实消痞丸","葛花解醒汤","肥儿丸"],
    ["乌梅丸","化虫丸","布袋丸"],
    ["瓜蒂散","救急稀涎散","参芦饮"],
    ["小青龙汤"]
];

var array_poet = [
    ["麻黄汤中用桂枝，杏仁甘草四般施，发热恶寒头项痛，喘而无汗服之宜。", "桂枝汤治太阳风，芍药甘草姜枣同，解肌发表调营卫，伤寒有汗此为功。","九味羌活用防风，细辛苍芷与川芎，黄芩生地同甘草，分经论治宜变通","小青龙汤治水气，外寒里饮咳喘慰，姜桂麻黄芍药甘，细辛半夏兼五味", "人参败毒茯苓草，羌独柴前桔枳芎，薄荷少许姜三片，时行感冒有奇功", "桑菊饮用桔杏翘，芦根甘草薄荷饶，清疏肺卫轻宣剂，风温咳嗽服之消", "银翘散主上焦疴，竹叶荆牛豉薄荷，甘桔芦根凉解法，风温初起此方良", "伤寒麻杏石甘汤，喘而汗出法度良，辛凉宣泄能清肺，定喘除热效力彰。", "止嗽散用百部菀，白前桔草荆陈研，宣肺疏风止咳痰，姜汤调服不必煎", "香苏散内草陈皮，外感风寒气滞宜；寒热头痛胸脘闷，解表又能疏气机。", "正柴胡饮平散方，芍药防风陈草姜；轻疏风邪解热痛，表寒轻症服之康", "陶氏柴葛解肌汤，邪在三阳热势张；芩芍秸甘羌活芷，石膏大枣与生姜。", "葱鼓桔梗翘薄荷，山栀竹叶加甘草，热邪束肺嗽咽痛，风温初起此方疗。", "参苏饮内用陈皮，枳壳前胡半夏齐，干葛木香甘桔茯，气虚外感最相宜。", "再造散用参附芪，桂甘羌防芎芍齐，再加细辛姜枣煮，阳虚寒闭最相宜。", "麻黄附子细辛汤，发表温经两法彰；若去细辛加炙草，少阴反热亦能康。", "加减葳蕤用白薇，豆豉薄荷干桔随，再入姜枣与葱白，滋阴发汗功可慰。", "葱白七味外台方，新鼓葛根与生姜，麦冬生地千扬水，血虚外感最相当。", "阎氏升麻葛根汤，芍药甘草合成方，麻疹初期发不透，解肌透疹此为良。"],
    ["大承气汤用芒硝,枳实厚朴大黄饶,救阴泻热功偏擅,急下阳明有数条", "金匮大黄牡丹汤，桃仁芒硝瓜子襄;肠痈初起腹按痛，尚未成脓服之安。", "温脾参附与干姜，甘草当归硝大黄,寒热并行治寒积,脐腹绞结痛可安。", "麻子仁丸治脾约，大黄枳朴杏仁芍，胃热津枯便难解，润肠通便功效高。", "济川归膝肉苁蓉，泽泻升麻枳壳从，肾虚津亏肠中燥，寓通于补法堪宗", "大陷胸汤用硝黄，甘遂为末共成方;专治实热结胸证，泻热逐水效非常。加入杏仁与荸劳，和丸更治项背强。", "大黄附子细辛汤，散寒止痛功效良；冷积久痢因成实，功专温下妙非常。", "三物备急巴豆研，干姜大黄不需煎，卒然腹痛因寒积，速投此方急救先。", "五仁柏仁杏仁桃，松仁陈皮郁李饶，炼蜜为丸米饮下，润肠通便此方效。", "黄龙汤中大承气，加入参归甘桔比；生姜红枣同煎服，功补兼施通便秘。", "新加黄龙用海参，玄麦生地硝黄呈,参归姜草扶正气，攻补兼施法可尊。", "增液承气玄地冬，更加硝黄力量雄，热结阴亏肠燥结，滋阴泻下法可宗。", "十枣逐水效堪夸,大戟甘遂与芫花;控涎丹用遂戟芥，荸劳大枣亦可嘉。", "舟车黑丑及大黄，遂戟芫花槟木香，表皮陈皮轻粉入，逐水消肿力量强。",    "大黄附子细辛汤, 散寒通便止痛良, 寒积里实服此方, 邪去正安腹通畅。",    "三物备急巴豆研,千姜大黄不需煎,卒然腹痛因寒积，速投此方急救先。",    "五仁柏仁杏仁桃，松仁陈皮郁李饶，炼蜜为丸米饮下，润肠通便此方效。","黄龙汤中大承气，加入参归甘桔比；生姜红枣同煎服，功补兼施通便秘","新加黄龙用海参，玄麦生地硝黄呈，参归姜草扶正气，攻补兼施法可尊。","增液承气玄地冬，更加硝黄力量雄，热结阴亏肠燥结，滋阴泻下法可宗","十枣逐水效堪夸, 大戟甘遂与芫花，悬饮内停胸胁痛，水肿腹胀用无差。","舟车黑丑及大黄，遂戟芜花槟木香，表皮陈皮轻粉入，逐水消肿力量强"],
    ["小柴胡汤和解供,半夏人参甘草从,更加黄芩生姜枣,少阳为病此方宗", "大柴胡汤用大黄，枳实芩夏白芍将，煎加姜枣表兼里，妙法内攻并外攘。", "嵩芩清胆碧玉需，陈夏茯苓枳竹茹，热重寒轻痰挟湿，胸痞呕恶总能除", "四逆散中用柴胡，芍药枳实甘草须，此是阳郁成厥逆，疏肝理脾奏效奇", "逍遥散用归芍柴，苓术甘草姜薄偕，疏肝养血兼理脾，丹栀加入热能排", "半夏泻心黄连芩，干姜甘草与人参，大枣和之治虚痞，法在降阳而和阴", "防风通圣大黄硝，荆芥麻黄栀芍翘，甘桔归芎滑石膏，薄荷芩术力偏饶，表里交攻阳偏盛，外科疡毒总能消。", "蒿芩清胆枳竹茹，陈夏茯苓碧玉途，热重寒轻痰湿重，胸痞呕恶总能除","达原草果槟厚朴，知母黄苓芍甘佐；辟秽化浊达膜原，邪伏膜原寒热作。","痛泻要方用陈皮，术芍防风共成剂，肠鸣泄泻又腹痛，治在泻肝与实脾。", "葛根黄芩黄连汤，甘草四般治二阳，解表清里兼和胃，哄汗下利保安康。","疏凿饮子泻水方，木通泽泻与槟榔，羌艺苓腹椒商陆，赤豆姜皮退肿良。"],
    ["白虎膏知甘草粳，气分大热此方清，热渴汗出脉洪大，加入人参气津生", "竹叶石膏参麦冬，半夏粳米甘草从；清补气津又和胃，余热耗伤气津用。", "清营汤是鞠通方，热入心包营血伤，角地银翘玄连竹，丹麦清热佐之良。", "清瘟败毒地连苓，丹石栀甘竹叶寻，犀角玄翘知芍桔，清热解毒亦滋阴。", "凉膈硝黄栀子翘,黄芩甘草薄荷饶；再加竹叶调蜂蜜，上中郁热服之消", "仙方活命金银花，防芷归陈草芍加，贝母天花兼乳没，穿山皂刺酒煎佳，一切痈毒能溃散，溃后忌服用勿差。", "龙胆栀芩酒拌炒，木通泽泻车柴草;当归生地益阴血，肝胆实火湿热消。", "苇茎瓜瓣苡桃仁，清肺化痰逐瘀能；热毒痰瘀致肺痈，脓成未成均胜任。", "清胃散中当归连，生地丹皮升麻全，或加石膏泻胃火，能消牙痛与牙宣。", "葛根芩连甘草伍，用时先将葛根煮，内清肠胃外解表，胁热下利喘汗除。", "芍药汤中用槟黄，芩连归桂草木香，重在调气兼行血，里急便脓自然康。", "白头翁汤治热痢，黄连黄柏佐秦皮,清热解毒并凉血，赤多白少脓血医。", "王氏清暑益气汤，暑热气津已两伤，洋参麦斛粳米草，翠衣荷连知竹尝。", "香苏散内草陈皮，疏散风寒又理气，外感风寒兼气滞，寒热无汗胸脘痞。","犀角地黄芍药丹，血热妄行吐衄斑。 蓄血发狂舌质绛，凉血散瘀病可痊。","黄连解毒汤四味，黄芩黄柏栀子备， 躁狂大热呕不眠，吐衄发斑均可为。","普济消毒饮苓连，甘桔蓝根勃翘玄；升柴陈薄僵蚕入，大头瘟毒服之痊。","导赤木通生地黄，草梢煎加竹叶尝；清心利水又养阴，心经火热移小肠。","左金连英六比一，清肝泻火降呕逆；肝火犯胃痛吐酸，再加芍药名成己。","泻白桑皮地骨皮，梗米甘草四般宜；清泻肺热平和剂，热伏肺中喘咳医","玉女煎用熟地黄，膏知牛膝麦冬襄，肾虚胃火相为病，牙痛齿衄宜煎尝。","滑石甘草六一散，清暑利湿功用专，辰砂黛薄依次加，益元碧玉鸡苏散。","桂苓甘露滑石膏，寒水猪苓泽术草，清暑化气利水湿，暑湿俱盛重证疗。","青蒿鳖甲知地丹，热自阴来仔细看，夜热早凉无汗出，养阴透热服之安","清骨散用银柴胡，胡连秦艺鳖甲辅，地骨青蒿知母草，骨蒸劳热一并除。","火炎汗出六黄汤，归柏苓连二地黄，倍用黄芪为固表，滋阴清热敛汗强","清络祛暑六药鲜，银扁翠衣瓜络添，暑伤肺经气分证，佐以竹叶荷叶边。"],
    ["理中丸主温中阳,人参甘草术干姜,呕利腹痛阴寒盛,再加附子更扶阳", "小建中汤君饴糖，方含桂枝加芍汤，温中补虚和缓急，虚劳里急腹痛康。", "吴茱萸汤参枣姜，肝胃虚寒此法良，阳明寒呕少阴利，厥阴头痛亦堪尝", "四逆汤中附草姜，阳衰寒厥急煎尝，腹痛吐泻脉沉细，急投此方可回阳。", "回阳救急用六君，桂附干姜五味群，加麝三厘或胆汁，三阴寒厥建奇勋。", "暖肝煎中杞茯归，茴沉乌药合肉桂，下焦虚寒疝气痛，温补肝肾此方推。", "阳和汤法解寒凝,贴骨流注鹤膝风,熟地鹿胶姜炭桂,麻黄白芥甘草从","当归四逆芍桂枝，细辛甘枣通草施，温经散寒通血脉，血虚寒厂此方宜。","黄芪桂枝五物汤，桂枝去草增生姜，散寒固表调营卫，麻木不仁可调畅。"],
    ["四君子汤中和义 ,参术茯苓甘草比, 益以夏陈名六君, 祛痰补气阳虚饵, 除却半夏名异功, 或加香砂胃寒使。", "参苓白术扁豆陈，莲草山药砂薏仁；桔梗上浮兼保肺，枣汤调服益脾神。", "补中益气芪参术，炙草升柴归陈助；清阳下陷能升举，气虚发热甘温除。", "生脉麦味与人参,保肺清心治暑淫;气少汗多兼口渴，病危脉绝急煎斟。", "人参蛤蚧益肺肾，证见痰热咳与喘，桑皮贝母茯苓杏，知母甘草同加餐。", "四物熟地归芍芎，补血调血此方宗；营血虚滞诸多证，加减运用贵变通。", "归脾汤用术参芪，归草茯神远志齐；酸枣木香龙眼肉，煎加姜枣益心脾。", "六味地黄山药萸,泽泻苓丹三泻侣;三阴并补重滋肾,肾阴不足效可居;滋阴降火知柏需，养肝明目加杞菊；都气五味纳肾气，滋补肺肾麦味续。", "一贯煎中生地黄,沙参归杞麦冬藏;少佐川楝泄肝气，阴虚胁痛此方良。", "金匮肾气治肾虚，熟地淮药及山萸，丹皮苓泽加桂附，引火归元热下趋", "地黄饮子山茱斛，麦味菖蒲远志茯;<br>苁蓉桂附巴戟天，少入薄荷枣姜服。","玉屏组合少而精，芪术防风鼎足形；表虚汗多易感冒，固卫敛汗效特灵。","完带汤中用白术，山药人参白芍辅，苍术车前黑芥穗，陈皮甘草与柴胡。","当归补血君黄芪，芪归用量五比一，补气生血代表剂，血虚发热此方宜","四君四物加枣姜，八珍双补气血方；再加黄芪与肉桂，十全大补效增强；更加橘味志去芎；养荣补心安神良。","灸甘草参枣地胶，麻仁麦桂姜酒熬；益气养血温通脉，结代心悸肺痿疗；加芍去参枣桂姜，加减复脉滋阴饶。","泰山磐石八珍全，去苓加芪芩断联，再益砂仁及糯米，妇人胎动可安全。","左归丸内山药地，萸肉枸杞与牛膝；芜丝龟鹿二胶合，壮水之主方第一","大补阴丸知柏黄，龟板脊髓蜜成方；咳嗽咯血骨蒸热，阴虚火旺制亢阳。","百合固金二地黄，玄参贝母桔甘藏，麦冬芍药当归配，喘咳疾血肺家伤。","补肺阿胶马兜铃，鼠粘甘草杏糯停，肺虚火盛人当服，顺气生津嗽硬宁","二至女贞与旱莲，桑葚熬膏和成丸，肝肾阴虚得滋补，强腰乌须医晕眩。","十补丸出济生方，肾阳虚损最为良，六味肉桂和五味，鹿茸附子壮元阳","右归丸中地附桂，山药莱萸苑丝归，杜仲鹿胶枸杞子，益火之源此方魁。","《医便》龟鹿二仙胶，人参枸杞熬成膏；滋阴益肾填精髓，精极用此疗效高。","七宝美髯何首乌，范丝牛膝茯苓俱，骨脂枸杞当归合，专益肝肾精血虚。","补天大造治虚劳，参芪术归枣白芍，龟鹿用胶河车远，枸杞熟地苓山药。"],
    ["牡蛎散内用黄芪，麻黄根与小麦齐，益气固表又敛阴，体虚自汗盗汗宜。", "真人养脏木香诃，当归肉蔻与粟壳，术芍参桂甘草共，脱肛久痢服之瘘。", "四神故纸与吴萸，肉蔻五味四般齐；大枣生姜同煎合，五更肾泄最相宜。", "桃花汤中赤石脂,千姜粳米三般施,虚寒下痢便脓血，温涩止痢服之宜。", "桑螵蛸散龙龟甲，参归茯神菖远加，调补心肾又涩精，心肾两虚尿频佳。", "固冲芪术山萸芍，龙牡倍榈茜海螵;益气健脾固摄血,脾虚冲脉不固疗。", "固经龟板芍药苓，黄柏椿根香附应；阴虚血热经量多，滋阴清热能固经。", "易黄山药与芡实，白果黄柏车前子;固肾清热又祛湿，肾虚湿热带下医。","九仙罂栗乌梅味，参胶桑皮款桔贝，敛肺止咳益气阴，久咳肺虚效堪谓。","金锁固精芡莲须，龙骨牡蛎与藜，莲粉糊丸盐汤下，补肾涩精止滑遗。","缩泉丸治小便频，膀胱虚寒遗尿，乌药益智各等分，山药糊丸九效更珍。"],
    ["朱砂安神东垣方，归草黄连生地黄,心悸不寐心烦乱，清热养阴神自安。", "天王补心柏枣仁，二冬生地当归身，三参桔梗朱砂味，远志茯苓共养神。", "酸枣仁汤治失眠，川芎知草茯苓煎，养血除烦清虚热，安然入睡梦乡甜。","磁朱丸中有神曲，安神潜阳治目疾，心悸失眠皆可用，癫狂痫证宜服之。","夏曲远志兼桂味，二茯芎归柏子寻，养心汤用草芪参，再加酸枣总宁心","金匮甘麦大枣汤，妇人脏躁喜悲伤，精神忧郁常欲哭，养心安神效力彰。"],
    ["安宫牛黄开窍方,苓连栀郁朱雄黄，犀角珍珠冰麝箔，热闭心包功用良。", "苏合香丸麝息香,木丁熏陆荜檀香，牛冰术沉诃香附，中恶急救莫彷徨。","紫雪犀羚朱朴硝，硝磁寒水滑石膏，丁沉木麝升玄草，不用赤金法亦超。","至宝朱砂麝息香，雄黄牛角与牛黄，金银二箔兼龙脑，琥珀还同玳瑁良。","行军散内冰麝香，珍珠硼砂共牛黄，雄黄火硝金箔配，暑月痧气吐泻方。","紫金锭用山慈菇，麝香五倍雄黄朱，续随大戟糯米锭，辟移化浊并解毒。"],
    ["越鞠丸治六郁证，气血痰火食湿困，芎术香附栀神曲，气畅郁舒痛闷伸。", "半夏厚朴痰气疏，茯苓生姜共紫苏，加枣同煎名四七，痰凝气滞皆能除。","疏肝行气兼活血，枳壳陈皮草香附，柴胡疏肝芍川芎，胁肋疼痛立能除", "苏子降气半夏归，前胡桂朴姜草随;<br>上盛下虚痰嗽喘，或加沉香去肉桂。", "定喘白果与麻黄，款冬半夏白皮桑，苏杏黄芩兼甘草，外寒痰热喘哮尝。", "旋覆代赭汤人参，半夏甘草姜枣临，重以镇逆咸软痞，痞硬噫气最能禁。","枳实蕉白桂枝汤，厚朴瓜蒌胸痹方；胸阳不振痰气结，通阳散结下气强。","四磨饮治七情侵，人参乌药及槟沉，浓磨煎服调滞气，实者枳壳易人参。","瓜蒌蕉白白酒汤，胸痹胸闷痛难当，喘息短气时咳睡，难卧再加半夏良。","半夏厚朴痰气疏，茯苓生姜共紫苏，加枣同煎名四七，痰凝气滞皆能除。","厚朴温中陈草苓，干姜草蔻木香停；煎服加姜治腹痛，寒湿胀满用之灵。","金铃元胡等分研，用酒调服或水煎；疏肝泄热行气血，肝郁化火诸痛面。","天台乌药木茴香，巴豆制高良姜；青皮槟榔疏肝气，寒疝腹痛是良方。","加味乌药汤砂仁，香附木香乌草伦，配入玄胡共六味，经前胀痛效堪珍。","橘皮竹茹治呕逆，生姜甘草枣人参，胃虚有热失和降，久病之后更相宜。","丁香柿蒂人参姜，呕逆因寒中气伤，温中降逆又益气，胃气虚寒最相当"],
    ["桃仁承气五般施，甘草硝黄并桂枝，瘀热互结小腹胀，蓄血如狂最相宜。", "血府当归生地桃，红花枳壳膝芎饶，通窍全凭好麝香，桃红大枣老葱姜；川芎黄酒赤芍药，表里通经第一方。膈下逐瘀桃牡丹，赤芍乌药元胡甘；归芎灵脂红花壳，香附开郁血亦安。少腹茴香与炒姜，元胡灵脂没芎当；蒲黄官桂赤芍药，调经种子第一方。身痛逐瘀膝地龙，香附羌秦草归芎；黄芪苍柏量加减，要紧五灵桃没红。", "补阳还五赤芍芎，归尾通经佐地龙，四两黄芪为主药，益气活血效力宏。", "复元活血汤柴胡,花粉当归山甲俱,桃仁红花大黄草,跌打损伤酒煎服。", "温经归芍桂萸芎，姜夏丹皮及麦冬,参草扶脾胶益血，调经重在暖胞宫。", "生化汤宜产后尝，归芎桃草酒炮姜，恶露不行少腹痛，化瘀温经功效彰。", "金匮桂枝茯苓丸，芍药桃仁和牡丹，等分为末蜜丸服,活血化瘀瘤块散。", "咳血方中诃子收，瓜蒌海粉山栀投，青黛蜜丸口噙化，咳嗽痰血服之瘆。", "黄龙汤枳朴硝黄，参归甘桔枣生姜，阳明腑实气血弱，攻补兼施效力强。", "黄土汤用苓地黄，术附阿胶甘草尝，温阳健脾能摄血，便血崩漏服之康。","丹参饮中有檀香，丹参砂仁共成方，血瘀气滞心胃痛，用水煎服保安康。","大黄䗪虫芩芍桃，地黄杏草漆蛴螬，蛇虫水蛭和丸服，祛瘀生新功独超。","十灰散用十般灰，柏茅茜荷丹榈随，二蓟栀黄皆炒黑，凉降止血此方推。","四生丸中侧柏叶，荷艾之叶用之协，生地合用为丸服，血热吐衄效可验。","小蓟饮子藕蒲黄，木通滑石生地襄，归草黑栀淡竹叶，血淋热结服之良。","槐花散用治肠风，侧柏荆芥枳壳充，等分为未米饮下，宽肠凉血见奇功。"],
    ["川芎茶调散荆防，辛芷薄荷甘草羌，目昏鼻塞风攻上，正偏头痛悉能康。", "大秦艽汤风热搏,细辛白芷羌独活，防风黄芩生石膏，八珍去参经络复。", "羚角钩藤汤法凉，桑菊茯神鲜地黄，贝草竹茹同芍药，肝风内动急煎尝。", "镇肝熄风芍天冬，玄参牡蛎赭菌供,麦龟膝草龙川楝，肝风内动有奇功。", "天麻钩藤石决明，杜仲牛膝桑寄生，栀子黄芩益母草，茯神夜交安神宁","小活络丹天南星，二乌乳没与地龙，寒湿疼血成痹痛，搜风活血经络通。","牵正散是杨家方，全蝎僵蚕白附襄，服用少量热酒下，口眼嘱斜疗效彰。","玉真散治破伤风，牙关紧闭反张弓，星麻白附羌防芷，外敷内服一方通。","消风散内有荆防，蝉蜕胡麻苦参苍，知膏蒡通归地草，风疹湿疹服之康。","大定风珠鸡子黄，再合加减复脉汤，三甲并同五味子，滋阴熄风是妙方。"],
    ["清燥救肺参草杷，石膏胶杏麦胡麻，经霜收下冬桑叶，清燥润肺效可夸", "养阴清肺是妙方，玄参草芍麦地黄，薄荷贝母丹皮入，时疫白喉急煎尝。","杏苏散内夏陈前，积桔苓草姜枣研，轻宜温润治凉燥，咳止痰化病自痊。","桑杏汤中浙贝宜，沙参栀豉与梨皮，干咳鼻酒又身热，清宣凉润温燥医。","麦门冬汤用人参，枣草梗米半夏存，肺痿咳逆因虚火，益胃生津此方珍。","温病条辨益胃汤，沙参麦地合成方，玉竹冰糖同煎服，温病需虑把津伤","玉液山药芪葛根，花粉知味鸡内金，消渴口干溲多数，补脾固肾益气阴","琼玉膏中生地黄，参苓白蜜炼膏尝，阴虚肺燥成劳嗽，金水相生效力彰。","增液玄参与地冬，热病津枯便不通，补药之体作泻剂，若非重用不为功。"],
    ["平胃散内君苍术，甘草姜枣朴陈煮；燥湿运脾又和胃，湿滞脾胃胀满除。", "藿香正气腹皮苏，平胃散中白术桔;神曲白芷和茯苓，风寒暑湿并能除。", "茵陈蒿汤大黄栀，瘀热阳黄此方施；便难尿赤腹胀满，功在清热与利湿。", "八正木通与车前，萹蓄大黄栀滑研；草梢瞿麦灯心草，湿热诸淋宜服煎。", "五苓散治太阳腑，白术泽泻猪苓茯，桂枝化气兼解表，小便通利水饮逐。", "真武附苓术芍姜，温阳利水壮肾阳；脾肾阳虚水气停,腹痛悸眩瞤动康。", "实脾温阳行利水，干姜附苓术草随;木瓜香槟朴草果，阳虚水肿腹胀崇。", "独活寄生秦防辛，四物四君去白术；桂枝杜仲与牛膝，顽痹风寒湿是因。","三仁杏蔻慧苡仁，朴夏通草滑竹存；宣畅气机清湿热，湿重热轻在气分","甘露消毒蔻藿香，茵陈滑石木通营，芩翘贝母射干薄，湿热时疫是主方。","连朴饮用香豆豉，菖蒲半夏芦栀子，芦根厚朴黄连入，湿热霍乱此方施。","当归枯痛猪苓泽，二术茵苓苦羌葛；升麻防风知参草，湿重热轻兼风邪。","二妙散中苍柏煎，若云三妙牛膝添，四妙再加薏苡仁，湿热下注痿痹痊","猪苓汤用猪茯苓，泽泻阿胶滑石并，小便不利兼烦渴，滋阴利水症自平","金匮防己黄芪汤，白术甘草加枣姜，益气祛风行水良，表虚风水风湿康。","五皮散用五般皮，陈茯姜桑大腹齐，或以五加易桑白，牌虚肤胀此方施。","苓桂术甘仲景方，温阳化饮又健牌；中阳不足饮停胃，胸胁支满悸眩施。","甘姜苓术肾著汤，祛寒除湿功效良，饮食如故小便利，身重腰冷可煎尝","真武附苓术芍姜，温阳利水壮肾阳；脾肾阳虚水气停，腹痛悸眩潤动康。","萆薢分清益智仁，营蒲乌药盐煎成；下焦虚寒得温利，分清化浊效如神。","羌胡胜湿羌独芎，甘蔓蒿本与防风，湿气在表头腰重，发汗升阳有奇功。"],
    ["二陈汤用半夏陈，苓草梅姜一并存，燥湿祛痰兼理气，湿痰为患此方珍。", "温胆夏茹枳陈助，佐以茯草姜枣煮；理气化痰利胆胃，胆郁痰扰诸症除。", "清气化痰胆星蒌，夏芩杏陈枳实投。茯苓姜汁糊丸服，气顺火清痰热疗。", "半夏白术天麻汤，苓草橘红枣生姜，眩晕头痛风痰盛，痰化风熄复正常。","指迷茯苓丸半夏，风硝枳壳姜汤下，中皖停疾肩臂痛，气行疾消痛自罢","十味温胆即去竹，远志参味枣地饶。清气化痰星夏橘，杏仁积实瓜蒌实，苓苓姜汁糊为丸，气顺火消痰自失。","小陷胸汤连夏蒌，宽胸开结涤痰优，膈上热痰疮满痛，舌苔黄腻服之瘆。","朦石硝焕滚痰丸，大黄黄芩沉香添；泻火逐痰临睡服，实火顽痰怪证蠲","贝母瓜蒌臣花粉，橘红茯苓加桔梗；肺燥有痰咳难出，润肺化疾此方珍。","苓甘五味姜辛汤，温肺化饮常用方；半夏杏仁均可加，寒痰水饮咳嗽康","三子养亲祛疾方，芥苏莱菔共煎汤；大便实硬加熟蜜，冬寒更可加生姜。"],
    ["保和神曲与山楂，苓夏陈翘菔子加,炊饼为丸白汤下,消食和胃效堪夸。", "健脾陈皮四君子，肉蔻香连合砂仁,楂肉山药曲麦炒,消补兼施此方寻。","枳实导滞首大黄，芩连曲术茯苓勃，泽泻蒸饼糊丸服，温热积滞力能攘。若还后重兼气滞，木香导滞加槟榔。","木香槟榔青陈皮，黄柏黄连莪术齐，大黄黑丑兼香附，泻痫后重热滞宜","枳实消痞四君先，麦芽夏曲朴姜连，脾虚疮满结心下，痞消脾健乐天年。","葛花解醒泽二苓，砂蔻青陈木香并，姜曲参术温健牌，分消寒化酒湿灵。","肥儿丸内用使君，豆蔻香连曲麦槟，猪胆为丸热水下，虫疮食积一扫清。"],
    ["乌梅丸用细辛桂,黄连黄柏及当归，人参椒姜加附子,清上温下又安蛔。","化虫鹤虱与使君，槟榔芜荑苦楝群，白矾铅粉糊丸服，肠中诸虫皆能除","布袋丸内用四君，芜美芦荟共调匀，夜明砂与使君子，消疮去虫法可循。"],
    ["瓜蒂散中赤小豆,豆豉汁调酸苦凑，逐邪涌吐功最捷，胸脘痰食服之瘆。","稀涎皂角与白矾，痰浊痹阻宜开关，中风疾闭口不语，涌吐通关气自还。","参芦饮是丹溪方，竹沥新加效更良，气虚体弱痰雍盛，服得此方吐而康。"],
    ["透脓散治毒成脓，芪归山甲皂刺芎，程氏又加银蒡芷，更能速奏溃破功。"],
    [""]
];

var array_sort = ["解表剂", "泻下剂", "和解剂", "清热剂", "温里剂", "补益剂", "固涩剂", "安神剂", "开窍剂", "理气剂", "理血剂", "治风剂", "治燥剂", "祛湿剂", "祛痰剂","消食剂", "驱虫剂", "涌吐剂"]

const ffang = [[0, 2], [0, 5], [0, 3], [1, 3], [2, 1], [2, 4], [2, 5], [2, 6], [3, 2], [3, 4], [3, 8], [3, 11], [4, 1], [5, 1], [5, 2], [5, 6], [5, 7], [5, 9], [5, 10], [9, 0], [9, 2], [9, 3], [10, 0], [10, 1], [10, 8], [11, 0], [11, 2], [11, 3], [12, 0], [12, 1], [13, 1], [13, 6], [14, 2], [14, 3], [15, 0], [15, 1], [16, 0], [4, 5], [18, 0], [3, 5], [0, 5], [0, 3]];//重点方
const first = [9, 5, 7, 14, 7, 11, 8, 3, 2, 7, 10, 5, 2, 8, 4, 2, 1, 1, 1, ffang.length]
