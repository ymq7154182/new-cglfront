<template>
    <div>
        <div class="home">
            <div class="home_textarea">
                <div style="position: relative;height: 50px">
                    <el-upload
                        action="/"
                        ref="upload"
                        :before-upload="beforeUpload"
                        accept=".txt" style="top: 20px;float: right;position: absolute" class="uploads">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">
                            只能上传txt文件
                            <a href="http://ailab.sdu.edu.cn:80/download" style="color: red">点击下载上传模板</a>
                        </div>
                    </el-upload>
                </div>
                <!--<el-button type="primary">点击下载模板</el-button>-->
                <el-input
                    type="textarea"
                    :autosize="{ minRows:15, maxRows: 15}"
                    v-model="textarea1"
                    class="textarea">
                </el-input>
            </div>
            <div class="home_button">
                <el-button class="button" @click="Stars">开始处理</el-button>
            </div>
            <!--<div class="home_some">-->
                <!--<div class="somebac"></div>-->
                <!--<div class="somecircle"></div>-->
                <!--<div>-->
                    <!--<div class="somecircle2">-->
                        <!--<span class="word2">数据处理</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle31" @click="clickrule1">-->
                        <!--<span class="word1">规则一</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle33" @click="clickrule2">-->
                        <!--<span class="word1">规则二</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle35" @click="clickrule3">-->
                        <!--<span class="word1">规则三</span>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="sometext">-->
                    <!--<el-scrollbar style="height: 100%">-->
                        <!--<div style="width: 90%;margin: 20px auto">-->
                            <!--<div v-if="show1">-->
                                <!--<h1>清洗乱码</h1>-->
                                <!--<p>{{result1}}</p>-->
                            <!--</div>-->
                            <!--<div v-if="show2">-->
                                <!--<h1>清洗符号</h1>-->
                                <!--<p>{{result2}}</p>-->
                            <!--</div>-->
                            <!--<div v-if="show3">-->
                                <!--<h1>清洗数字</h1>-->
                                <!--<p>{{result3}}</p>-->
                            <!--</div>-->

                        <!--</div>-->
                    <!--</el-scrollbar>-->
                <!--</div>-->
                <!--&lt;!&ndash;<div class="sometext1">&ndash;&gt;-->
                <!--&lt;!&ndash;<span class="wordtext">用户自定义词典</span>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="sometext2">&ndash;&gt;-->


                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;<el-button type="primary" size="mini" plain class="somebutton">导入</el-button>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "DataClear",
        data () {
            return {
                // textarea1: '长期施肥高寒草甸三种植物内生真菌群落结构的影响@孟益明$兰州大学生命科学学院!甘肃省兰州市730000@#$%@张琪$兰州大学生命科学学院!甘肃省兰州市730000@#$%@刘永俊$兰州大学生命科学学院!甘肃省兰州市730000@#$%@冯虎元$兰州大学生命科学学院!甘肃省兰州市730000高寒草甸植物内生真菌如何响应长期施肥,是一个悬而未决的问题。本文对高寒草甸样地中三种植物进行四年氮肥(NH4NO3)施加,对样品叶片内生真菌高通量测序。研究发现1)未经表面消毒的植物叶片中未分类真菌(Fungi Unclassified)数量不足0.07%,而表面消毒的三种植物中这一数值达到95%以上,表明对植物内生真菌的研究才刚起步。2)三种植物中,不施肥(0 g·m-2)或低肥(5 g·m-2)条件下毛球壳科(Lasiosphaeriaceae)内生真菌显著高于高施肥条件(10 g·m-2或15 g·m-2);小花草玉梅(Anemone rivularis var.flore-minore)中,新球腔菌科(Davidiellaceae)和小穴壳科(Dothioraceae)等科的内生真菌在不施肥或低施肥条件下数量显著高于高施肥条件;垂穗披碱草(Elymus nutans)在低肥浓度下荚孢腔菌科(Sporormiaceae)和丛赤壳科(Nectriaceae)内生真菌数量显著高于高肥浓度,而Togniniaceae和叶黑粉菌科(Entylomataceae)内生真菌在高浓度氮肥下却显著增加;披针叶黄华(Thermopsis lanceolata)中线黑粉菌科(Filobasidiaceae)内生真菌在低肥浓度下数量显著高于高肥浓度。3)三种植物中内生真菌群落多样性和丰富度差异极显著,不同施肥梯度显著改变了披针叶黄华内生真菌群落丰富度,且这些指标与植物碳、氮、磷含量显著相关。我们的研究揭示了施肥会对植物内生真菌群落结构产生一定影响;此外还揭示了一些寄生内生真菌,其数量随环境条件改变发生显著变化,表明内生真菌对宿主的作用并非早期研究表明的均为有利,而是会随着环境和宿主基因型的改变而改变。内生真菌;;群落生态学;;物种多样性;;高寒草甸Cheplick,Gregory P.,and Stanley Faeth.Ecology and evolution of the grass-endophyte symbiosis.Oxford university press,2009.@#$%Semmartin,María,et al."Broad‐scale variation of fungal‐endophyte incidence in temperate grasses."Journal of Ecology103.1(2015):184-190.@#$%Bálint,Miklós,et al."Host genotype shapes the foliar fungal microbiome of balsam poplar(Populus balsamifera)."PLoS One 8.1(2013):e53987.@#$%Saikkonen,Kari,et al."Model systems in ecology:dissecting the endophyte-grass literature."Trends in plant science 11.9(2006):428-433.白洋淀湿地植物丛枝菌根共生特性研究@李芳芳$河北大学生命科学学院!河北保定071002@#$%@赵金莉$河北大学生命科学学院!河北保定071002@#$%@贺学礼$河北大学生命科学学院!河北保定071002对白洋淀湿地不同生长季节的29科70种湿地植物与AM(arbuscular mycorrhiza)真菌共生特性进行了研究,结果表明,所有供试植物中均有AM真菌定殖,其中以菌丝定殖为主,丛枝和泡囊也有发现,但侵染强度相对较低,菌根类型为重楼型和疆南星型,其中以重楼型菌根为主,其所占比例可达75%。菌根定殖强度大于50.0%的植物有旱柳(Salix matsudana)、繁穗苋(Amaranthus paniculatus)、地笋(Lycopus lucidus)等22种植物。AM真菌菌丝定殖偏好性强的有杨柳科(Salicaceae)、苋科(Amaranthaceae)、菊科(Compositae)、唇形科(Labiatae)、豆科(Leguminosae)、茄科(Solanaceae)、锦葵科(Malvaceae)、桑科(Moraceae)、蔷薇科(Rosaceae)、萝藦科(Asclepiadaceae)、千屈菜科(Lythraceae)和伞形科(Umbelliferae)植物。70种植物中有63种有丛枝结构,丛枝定殖率为90.0%。丛枝丰富度大于50.0%的植物有龙葵、苘麻(Abutilon theophrasti)、旱柳等41种植物。丛枝结构偏好性强的有杨柳科、锦葵科、蔷薇科、豆科、唇形科、萝藦科、茄科和千屈菜科。70种植物中只有马唐(Digitaria sanguinalis)等6种植物未见泡囊结构,泡囊定殖率为91.4%,其中狗娃花(Heteropappus hispidus)、毛白杨(Populus tomentosa)、紫穗槐(Amorpha fruticosa)泡囊定殖率达100.00%。综合分析可知,AM真菌定殖偏好性强的是杨柳科、菊科、唇形科、豆科、千屈菜科和茄科植物。通过与生长在干旱环境的植物AM真菌定殖情况对比发现,湿地环境植物具有更高的丛枝侵染强度。原因可能是生长在湿地环境的植物具有充足水分条件和合适的气候条件,有利于丛枝生长。本文观测结果充分说明湿地植物能与AM真菌形成良好共生关系,AM真菌生长发育与植物生长环境密切相关,环境不仅影响AM真菌形态结构,也会对各结构定殖强度产生影响。AM真菌;;定殖偏好;;植物;;白洋淀湿地蒙古沙冬青深色有隔内生真菌磷脂脂肪酸生物标记研究@王少杰$河北大学生命科学学院!河北保定071002@#$%@贺超$河北大学生命科学学院!河北保定071002@#$%@薛子珂$河北大学生命科学学院!河北保定071002@#$%@贺学礼$河北大学生命科学学院!河北保定071002深色有隔内生真菌(Dark septate endophyte,DSE)是一类定殖于植物根细胞或细胞内、并形成深色有隔菌丝的土壤真菌。目前,其种属鉴定主要基于形态学和ITS序列分析。磷脂脂肪酸(PLFA)是微生物细胞膜的重要组成部分,其含量在自然生理条件下相对稳定。在不同微生物中,PFLA种类和含量都不相同,因此可作为菌种鉴定的生物标记。本试验分别于宁夏银川、沙坡头和甘肃民勤3个荒漠地采集蒙古沙冬青(Ammopiptanthus mongolicus)根样,分离培养DSE,并选取9株DSE分别提取PLFA,通过Sherlock微生物鉴定系统共检测出122个脂肪酸生物标记,其中共有且含量较多的脂肪酸生物标记为16:0和18:2CIS 9,12/18:0a,含量为13.88%~42.77%。对9株DSE进行聚类分析,可分为两大类群,其中类群I分为两个小分枝,外瓶霉(Exophiala cancerae)单独聚为一类,枝状枝孢菌(Cladosporium cladosporioides)、茎点霉属(Phoma sp.),隔孢腔菌属(Pleosporales sp.)和菊异茎点霉(Paraphoma chrysanthemicola)聚为一类;类群II共有4个菌株,分别为甘瓶霉(Phialophora mustea)、外瓶霉属(Exophiala sp.)、沙门外瓶柄霉(Exophiala salmonis)和球孢枝孢菌(Cladosporium sphaerospermum)。类群Ⅰ中5株DSE的16:0/(18:2CIS9,12/18:0a)值分别为0.58409、0.37997、0.55365、0.31681和0.38014,其比值范围为0.316~0.585;类群II中4株DSE的16:0/(18:2CIS9,12/18:0a)值分别为0.59345、0.75313、0.79593和0.77705,其比值范围为0.593~0.796。两个类群中,不同菌株中16:0和18:2CIS9,12/18:0a比值能够反映其亲缘关系,因此16:0/(18:2CIS9,12/18:0a)值可作为菌种分类指标。对122个PLFA分析,根据出现频次将其分为高频次、低频次和微频次,其中微频次只在1种菌株中出现,可作为该菌株的特征磷脂脂肪酸生物标记。9种菌株的特征脂肪酸分别是:外瓶霉(E.cancerae)为15:1cis10(w5)、14:0Aldehyde、14:0 2OH,枝状枝孢菌(C.cladosporioides)10:0、16:1 Alcohol w7Trans,茎点霉属(Phoma sp.)为Iso15:1at5、20:1Cis17(w3),隔孢腔菌属(Pleosporales sp.)为14:1 at 9 Position、19:1(w 11)、20:5 Cis(w 3),菊异茎点霉(P.chrysanthemicola)无明显特征脂肪酸,甘瓶霉(P.mustea)为19:1 Cis16(w 3),外瓶霉属(Exophiala sp.)为20:1 CIS 11(w 9),沙门外瓶柄霉(E.salmonis)为12:0 ANTEISO、12:0 3OH、Iso 17:1 G(w 11),球孢枝孢菌(C.sphaerospermum)为9:0 3OH、17:1 Cis 8(w 9)。DSE;;磷脂脂肪酸;;生物标记2株溶磷解钾与产IAA的内生真菌菌株筛选鉴定及促生作用研究@卢丹妮$九江学院药学与生命科学学院!江西九江332000@#$%@毛花英$九江学院药学与生命科学学院!江西九江332000@#$%@熊蓉露$九江学院药学与生命科学学院!江西九江332000@#$%@黄丹$九江学院药学与生命科学学院!江西九江332000@#$%@詹寿发$九江学院药学与生命科学学院!江西九江332000@#$%@陈晔$九江学院药学与生命科学学院!江西九江332000从钾矿区优势蕨类植物-芒萁内生真菌中筛选出具溶磷解钾、分泌IAA的功能菌株,并研究其对农作物的促生作用。采用菌株的形态学特性、培养特征及ITS5.8 rDNA序列分析方法对菌株进行鉴定,并结合液体培养和固体培养方法初步测定菌株的溶磷解钾能力,采用回接及盆栽试验研究它们对玉米幼苗的促生作用。从42株芒萁内生真菌中筛选得到2株具有高效溶磷解钾、分泌IAA功能的内生真菌菌株(编号为MQ013和MQ039),经鉴定MQ013菌株为泡盛曲霉(Aspergillus awamori),MQ039菌株为黑曲霉(Aspergillus niger)。促生作用实验结果显示,MQ013、MQ039菌株能有效提高玉米植株体内叶绿素及磷、钾含量。MQ013、MQ039菌株具有一定的溶磷、解钾和分泌IAA活性,并对玉米幼苗的生长有明显的促进作用。内生真菌;;溶磷;;解钾;;促生作用[1]蒋梅茵,杨德涌,熊毅.中国土壤胶体研究--ⅥⅡ.五种主要土壤的粘粒矿物组成[J].土壤学报,1982,19(1):61~70.@#$%[2]徐晓燕,马毅杰.土壤矿物钾的释放及其在植物营养中的意义[J].土壤通报,2001,32(4):172~178.@#$%[3]潘大伟,梁成华,杜立宇.土壤含钾矿物的释钾研究进展[J].土壤通报,2005,36(2):253~258.@#$%[4]吴翔,甘炳成,黄忠乾,彭卫红.一株产IAA菌株的筛选、鉴定及培养条件优化[J].四川农业大学学报,2015,(04):432~435.@#$%[5]Amal H.Aly,Abdessamad Debbab,Julia Kjer,Peter Proksch.Fungal endophytes from higher plants:a prolific source of phytochemicals and other bioactive natural products[J].Fungal Diversity,2010,41(1):1~16.@#$%[6]张英,朱颖,姚拓.三叶草根际溶磷菌溶磷及分泌IAA能力测定[J].草原与草坪,2012,5(32):36~40.@#$%[7]田宏,张德罡,姚拓,席琳乔.禾本科草坪草固氮菌株筛选及部分特性初步研究[J].中国草地,2005,27(5):47~52.@#$%[8]沈萍,范秀容,李广武.微生物学实验[M].北京:高等教育出版社,1999.@#$%[9]詹寿发,樊有赋,甘金莲,彭琴,孙德四,陈晔.1株山药内生真菌的鉴定及解钾活性[J].江苏农业科学,2013,41(10):320~323@#$%[10]李鹏,陈秀蓉,李振东,赵聪,张日俭.乳白香青分泌吲哚乙酸内生细菌的16S r DNA鉴定[J].草原与草坪,2009,2:6~9.@#$%[11]Keith S,Gareth M J,Walter G,et al.The genera of hyphomycetes[M].CBS~KNAW Fungal Biodiversity Centre,P.O.,2011:1~997.@#$%[12]Barnett H L,Hunter B B.Illustrated genera of imperfect fungi(4 Edition)[M].APS Press,St.Paul,1998:1~218@#$%[13]GUO Ling-dong,Hyde K D,Liew E CY.Deteetion and identifieation of endoP hytie fungi with in frond tissues of Livlstona chinensis based on rD NA sequence[J].Mol Phylogenet Evol,2001,20:1~13.@#$%[14]曾东方,罗信昌,傅伟杰.松口蘑菌丝体的分离和RAPD~PCR分析[J].微生物学报,2001,(03):278~286.@#$%[15]詹寿发,彭琴,陈晔,樊有赋,甘金莲,任林.庐山石韦内生真菌多样性及地下部分显微结构观察[J].南方农业学报,2012,43(9):1320~1324.@#$%[16]蔡磊,李文鹏,张克勤.高效解磷菌株的分离、筛选及其对小麦苗期生长的促进作用研究[J].土壤通报,2003,33(1):44~46.@#$%[17]徐文思,姜瑛,李引,张振,徐莉,胡锋,李辉信.一株植物促生菌的筛选、鉴定及其对花生的促生效应研究[J].土壤通报,2014,46(1):119~125.@#$%[18]李德孝,郭月霞,员海燕,张敏,龚小艳,穆芳.玉米叶绿素含量测定方法研究[J].中国农学通报,2005,16(2):97~100.@#$%[19]鲁如坤.土壤农业化学分析方法[M].北京:中国农业科技出版社,2000,302~316@#$%[20]谌书,刘丛强,连宾.一株黑曲霉对磷矿石的风化作用[J].矿物学报,2009,29(1):103~108.@#$%[21]胡婕,郁建平,连宾.黑曲霉对含钾矿物的解钾作用与机理分析[J].矿物岩石地球化学通报,2011,30(03):277~285.@#$%[22]连宾,陈骏,傅平秋,刘丛强,陈烨.微生物影响硅酸盐矿物风化作用的模拟实验[J].高校地质学报,2005,11(2):181~186.@#$%[23]苗丽,巩彪,聂文婧,王秀峰,魏珉,李岩,杨凤娟,史庆华.外源IAA对Na HCO3胁迫下黄瓜幼苗光合特性和抗氧化系统的影响[J].植物生理学报,2014,50(06):765~771.@#$%[24]郑炳松,程晓建,蒋德安,翁晓燕.钾元素对植物光合速率、Rubisco和RZA的影响[J].浙江林学院学报,2002,19(1):104~108.@#$%[25]邓振山,党军龙,张海州,李军,韦革宏.植物根际促生菌的筛选及其对玉米的促生效应[J].微生物学通报,2012,39(7):980~988.@#$%[26]李振东,陈秀蓉,杨成德,李鹏.乳白香青内生解磷菌的筛选鉴定及解磷特性研究[J].草业学报,2013,22(6):158~158.@#$%[27]黎起秦,罗宽,林纬,卢燕回,叶云峰.内生菌B47的定殖能力及其对番茄青枯病的防治作用[J].植物保护学报,2006,33(4):363~3691.@#$%[28]李振东,陈秀蓉,李鹏,满百膺.珠芽蓼内生菌Z5产IAA和抑菌能力测定及其鉴定[J].草业学报,2010,19(2):61~68.@#$%[29]钱旭,甘会云,杜勇涛,张鲜,陈晔,樊有赋.龙南钾矿区常见蕨类植物可培养内生真菌的多样性[EB/OL].广西植物,网络版,2015.(http://www.cnki.net/kcms/detail/45.1134.Q.20150115.0953.002.html)@#$%[30]王奎萍,郑颖,褚光耀,牛冬冬.解磷、固氮、产吲哚乙酸微生物菌株的筛选及其对植物的促生效果[J].江苏农业学报,2013,29(6):352~1359.@#$%[31]Lugo M A,Reinhart K O,Menoyo E,et al.Plant functional traits and phylogenetic relatedness explain variation in associations with root fungal endophytes in an extreme arid environment[J].Mycorrhiza,2015,25(2):85~95.@#$%[32]Mehta P,Walia A,Kulshrestha S,et al.Efficiency of plant growth–promoting P–solubilizing Bacillus circulans CB7 for enhancement of tomato growth under net house conditions[J].Journal of Basic Microbilogy,2015,55(1):33~44.藏东南色季拉亚高山ECM真菌物种多样性及生态研究@安红梅$西藏大学农牧学院西藏高原生态研究所!西藏林芝860000@#$%@徐阿生儀$西藏大学农牧学院西藏高原生态研究所!西藏林芝860000色季拉亚高山是藏东南地区山地温带森林的代表,植被垂直分布明显,生态环境良好,受印度洋季风暖流的影响,夏季雨量充沛,水热条件适宜,菌物资源丰富。按照野外生态学方法,采用样线法、标准地调查和随机踏查,在急尖长苞冷杉林(Abies georgei var.smithii)、林芝云杉林(Picea likiangensis var.linzhiensis)、川滇高山栎林(Quercus aquifolioides)、高山松林(Pinus densata)、华山松林(P.armandii)及杜鹃灌丛(Rhododendron spp.)等优势群落中进行调查研究。研究结果表明,色季拉亚高山外生菌根(Ectomycorrhizal,简称ECM)真菌物种丰富。经初步鉴定,ECM真菌共计248种,按照《Dictionary of the Fungi》(2008,10th edn)分类系统,担子菌247种,分属于8目22科37属,子囊菌一种。其中,优势科(≥10种)为红菇科(Russulaceae)、丝膜菌科(Cortinariaceae)、牛肝菌科(Boletaceae)、鹅膏菌科(Amanitaceae)及口蘑科(Tricholomataceae);优势属(≥5种)为红菇属(Russula)、丝膜菌属(Cortinarius)、鹅膏菌属(Amanita)、乳菇属(Lactarius)、牛肝菌属(Boletus)、乳牛肝菌属(Suillus)、蜡伞属(Hygrophorus)、口蘑属(Tricholoma)、丝盖伞属(Inocybe)、绒盖牛肝菌属(Xerocomus)、疣柄牛肝菌属(Leccinum)及鸡油菌属(Cantharellus)。按经济价值,食用菌172种,药用菌64种,毒菌70种。就生态分布而言,ECM真菌主要分布于海拔3000m-4200m的亚高山暗针叶林(急尖长苞冷杉)和山地硬叶常绿阔叶林(川滇高山栎)内,主要发生季节为水热条件较好的7-9月。ECM真菌;;种类;;生态分布;;西藏Kirk PM,Cannon PF,Minter DW,et al.2008.Ainsworth&Bisby’s Dictionary of the Fungi.(10th edn.)Wallingford(OX,UK):CABI:1-771.昆虫病原菌Isaria Fumosoroseais新的次生代谢产物---玫烟菌素:从结构、基因到功能@梁藩$河北大学!河北省保定市邮编071002@#$%@陈波$河北大学!河北省保定市邮编071002@#$%@刘林霞$河北大学!河北省保定市邮编071002@#$%@刘亭$河北大学!河北省保定市邮编071002@#$%@刘智勤$河北大学!河北省保定市邮编071002@#$%@陈川$河北大学!河北省保定市邮编071002@#$%@罗都强$河北大学!河北省保定市邮编071002我们从昆虫病原真菌Isaria Fumosoroseais中分离得到一种新型的吡啶酮类化合物玫烟菌素。应用酪氨酸磷酸酶高通量筛选模型发现其对酪氨酸磷酸酶PTP1B具有很好的抑制作用,经过酶学反应发现其IC50为14.04μM,是一种非竞争性抑制剂。通过该虫生真菌基因组发现,烟菌素是由PKS-NRPS基因簇控制合成的,并且我们通过农杆菌介导的基因敲除进行了证明。我们对该基因簇进行了基因改造和异源表达,以期能得到对PTP1b有更好抑制效果的次级代谢产物。酪氨酸磷酸酶PTP1b在调节胰岛素敏感性和能量代谢的过程中起着重要作用,是II型糖尿病的治疗靶点。我们通过体内和体外活性研究发现玫烟菌素能够改善Ⅱ型糖尿病的胰岛素抵抗。生物学机制研究发现,玫烟菌素通过抑制PTP1b增强insulin-IRS-AKT信号通路的作用从而能显著改善糖尿病KKAy小鼠的胰岛素抵抗。玫烟菌素毒性低,是一种潜在的Ⅱ型糖尿病治疗药物。这样我们从玫烟菌素的发现,合成代谢基因到其在生物体功能进行了系列的研究,为开发新型的II型糖尿病治疗药物奠定了基础。Isaria Fumosoroseais;;PKS-NRPS;;酪氨酸磷酸酶PTP1B;;Ⅱ型糖尿病Liu L,Zhang J,Chen C,Teng J,Wang C,Luo D.2015.Structure and biosynthesis of fumosorinone,a new protein tyrosine phosphatase 1B inhibitor firstly isolated from the entomogenous fungus Isaria fumosorosea.Fungal Genet Biol.81:191-200.@#$%Liu ZQ,Liu T,Chen C,Li MY,Wang ZY,Chen RS,Wei GX,Wang XY,Luo DQ.,2015.Fumosorinone,a novel PTP1B inhibitor,activates insulin signaling in insulin-resistance Hep G2 cells and shows anti-diabetic effect in diabetic KKAy mice..Toxicol Appl Pharmacol.285(1):61-70.特殊环境真菌活性物质研究平台@李二伟$中国科学院微生物研究所真菌学国家重点实验室!北京100101@#$%@任晋玮$中国科学院微生物研究所真菌学国家重点实验室!北京100101@#$%@王文昭$中国科学院微生物研究所真菌学国家重点实验室!北京100101@#$%@刘宏伟$中国科学院微生物研究所真菌学国家重点实验室!北京100101@#$%@尹文兵$中国科学院微生物研究所真菌学国家重点实验室!北京100101@#$%@刘钢$中国科学院微生物研究所真菌学国家重点实验室!北京100101@#$%@车永胜$军事医学科学院毒物药物研究所!北京100850@#$%@刘杏忠$中国科学院微生物研究所真菌学国家重点实验室!北京100101真菌是地球上分布广泛、生物多样性丰富的真核微生物,2011年文献报道其物种数达510万种,目前被人类认知的近10万余种,已进行功能评价与化学研究的物种比例则更低,因而从真菌资源中寻找活性/功能次级代谢产物,并进行深入的研究与开发有巨大的潜力可以挖掘。由于真菌菌种的可再培养性,真菌及其次级代谢产物是可以重复利用的重要资源,在生命科学研究、工农业生产、人类健康和经济可持续发展中发挥着至关重要的作用。真菌学国家重点实验室次级代谢产物研究平台充分利用丰富的真菌资源,实现特殊生境/生存策略真菌活性次级代谢产物高通量筛选、快速分离和化学结构的高效鉴定;发现具有重大利用价值的真菌新结构活性次级代谢产物;为我国医药产业的发展,为人类的健康做出贡献。本平台由真菌的保藏与发酵,次级代谢产物的分离纯化与活性筛选等技术体系,及用于次级代谢产物纯化合物结构表征的仪器设备组成,将广泛服务于生物学、化学以及医药卫生等学科领域。平台将积极开拓核磁共振仪、液质联用仪、气质联用仪等大型仪器的服务项目,为重点室、微生物所及所外单位提供优质的技术服务,最大限度地满足从事真菌次级代谢产物研究相关课题组的科研需求。真菌次级代谢产物;;研究平台一株植物内生真菌活性次级代谢产物研究@刘玲$中国科学院微生物研究所真菌学国家重点实验室!北京100101@#$%@张杨$军事医学科学院毒物药物研究所!北京100850@#$%@郭良栋$中国科学院微生物研究所真菌学国家重点实验室!北京100101@#$%@曹亚$中南大学湘雅医学院肿瘤研究所!湖南省长沙市410078@#$%@车永胜$军事医学科学院毒物药物研究所!北京100850恶性肿瘤是威胁人类健康的主要杀手,而目前市场上仍然缺乏高效的抗肿瘤药物,因此针对恶性肿瘤的创新药物研制变得日益迫切。真菌是重要的活性天然产物来源,人类已经从中发现多种治疗重大疾病的药物。植物内生真菌由于其特殊的生存环境与生存方式使其形成了独特的代谢和防御系统,进而能够产生结构新颖、多样,活性广泛的次级代谢产物,为药物研发提供了优质的化合物来源。本研究选取一株元宝枫枝条分离的内生真菌Paraconiothyrium brasiliense(M3-3341)进行了化学研究,共获得21个倍半萜类化合物,其中19个为新结构,包括3个独特4-oxatricyclo[3.3.1.02,7]-nonane骨架的倍半萜类化合物。活性评价结果表明其中一个新倍半萜生物碱化合物XY172能抑制MCF-7和MGC-803的增殖。初步作用机制研究发现该化合物能导致MCF-7和MGC-803细胞阻滞于G1期;同时能剂量依赖性的方式诱导细胞凋亡。此外对XY172进行结构修饰,研究了其构效关系。植物内生真菌;;次级代谢产物;;细胞毒Liu L,Gao H,Chen X,Cai X,Yang L,Guo L,Yao X,Che Y,2010.Brasilamides A-D,sesquiterpenoids from the plant endophytic fungus Paraconiothyrium brasiliense.Eur.J.Org.Chem.2010(17):3302-3306.@#$%Liu L,Chen X,Li D,Zhang Y,Li L,Guo L,Cao Y,Che Y,2015.Bisabolane sesquiterpenoids from the plant endophytic fungus Paraconiothyrium brasiliense.J.Nat.Prod.78(4):746-753.@#$%Guo Z,Ren F,Che Y,Liu G,Liu L,2015,New bergamotane sesquiterpenoids from the plant endophytic fungus Paraconiothyrium brasiliense.Molecules,20:14611-14620.Filamentous fungi are renowned for the production of secondary metabolites(SMs).However,fungal SM pathways remain largely untapped due to difficulties in the efficiently assemblingand expressing the entire SM pathways.Here,we describe a high efficient way to assemblefungal SM clusters quickly and express them in a heterologous host Aspergillus nidulans.Ourapproach utilizes the advantage of fungal genomic sequencing combining synthetic biologicaldesign.Using this strategy,we assembled several biosynthetic pathways of the importantbioactive molecules containing immunosuppressant neosartoricins,ATPase inhibitorsaurovertins,insecticide beauvericin as well as cell wall pigments.By transformation andfermentation,we obtained the targeted SM production in the robust host A.nidulans.Theproducts were confirmed via HPLC-LC-MS and followed by NMR analysis.Subsequently,we can control the gene expression and production of SM by controlling designed regulatoryelements.Therefore,the successful constructions of SM pathways represent an importantadvancement for the discovery of bioactive natural product.Also,our approach provides anefficient way for the study on difficult SM biosynthetic pathway in the heterologous host.Synthetic biological construction of bioactive molecule pathway and heterologous production in Aspergillus nidulans@Zi-Hui Ma$State Key Laboratory of Mycology,Institute of Microbiology,Chinese Academy of Sciences!Beijing 100101,People\'s Republic of China@#$%@Peng Zhang$State Key Laboratory of Mycology,Institute of Microbiology,Chinese Academy of Sciences!Beijing 100101,People\'s Republic of China@#$%@Wei Li$State Key Laboratory of Mycology,Institute of Microbiology,Chinese Academy of Sciences!Beijing 100101,People\'s Republic of China@#$%@Anhui Sun$State Key Laboratory of Mycology,Institute of Microbiology,Chinese Academy of Sciences!Beijing 100101,People\'s Republic of China@#$%@Lixin Zhang$State Key Laboratory of Mycology,Institute of Microbiology,Chinese Academy of Sciences!Beijing 100101,People\'s Republic of China@#$%@Wen-Bing Yin$State Key Laboratory of Mycology,Institute of Microbiology,Chinese Academy of Sciences!Beijing 100101,People\'s Republic of China<正>Filamentous fungi are renowned for the production of secondary metabolites(SMs).However,fungal SM pathways remain largely untapped due to difficulties in the effi',
                textarea1: '',
                fileList: [],
                textData: '',
                result1: '',
                result2: '',
                result3: '',
                show1: false,
                show2: false,
                show3: false,
            }
        },
        mounted () {
          this.dealData()
        },
        beforeCreate() {
            // 读取文件
            FileReader.prototype.reading = function ({encode} = pms) {
                let bytes = new Uint8Array(this.result);    //无符号整型数组
                let text = new TextDecoder(encode || 'UTF-8').decode(bytes);
                return text;
            };
            /* 重写readAsBinaryString函数 */
            FileReader.prototype.readAsBinaryString = function (f) {
                if (!this.onload)       //如果this未重写onload函数，则创建一个公共处理方式
                    this.onload = e => {  //在this.onload函数中，完成公共处理
                        let rs = this.reading();
                        console.log(rs);
                    };
                this.readAsArrayBuffer(f);  //内部会回调this.onload方法
            };
        },
        methods: {
            Stars () {
                this.rule1()
                this.rule2()
                this.rule3()
                // this.show1 = true
                // this.show2 = false
                // this.show3 = false

            },
            dealData () {
                // var fs = require(fs)
                // fs.writeFile("D:\\test\\a.txt", this.textarea1)
                // var fso = new ActiveXObject("Scripting.FileSystemObject")
                // var f = fso.createtextfile("D:\\test\\a.txt",2,true);
                // f.WriteLine(this.textarea1)
                // f.close()
            },
            rule1 () {
                var url = 'http://ailab.sdu.edu.cn:80/dataCleaningRuleOne'
                const fileFormData = new FormData()
                fileFormData.append('filename', this.files)
                this.$axios.post(url,fileFormData).then((res) => {
                    this.result1 = res.data.result
                    localStorage.setItem('rule1', res.data.result)


                })
            },
            rule2 () {
                var url = 'http://ailab.sdu.edu.cn:80/dataCleaningRuleTwo'
                const fileFormData = new FormData()
                fileFormData.append('filename', this.files)
                this.$axios.post(url,fileFormData).then((res) => {
                    this.result2 = res.data.result
                    localStorage.setItem('rule2', res.data.result)
                })
            },
            rule3 () {
                var url = 'http://ailab.sdu.edu.cn:80/dataCleaningRuleThree'
                const fileFormData = new FormData()
                fileFormData.append('filename', this.files)
                this.$axios.post(url,fileFormData).then((res) => {
                    this.result3 = res.data.result
                    localStorage.setItem('rule3', res.data.result)
                })
            },
            beforeUpload(file){
                // this.fileList = [file]
                console.log('选择了文件beforeUpload')
                this.files = file
                // 读取数据
                this.read(file);
                return false
            },
            read(f) {
                let rd = new FileReader();
                rd.onload = e => {
                    //this.readAsArrayBuffer函数内，会回调this.onload函数。在这里处理结果
                    let cont = rd.reading({encode: 'utf-8'});
                    console.log(cont);
                    this.textarea1 = cont
                    let  formerData = this.textData;
                    this.textData = formerData + "\n" + cont;
                    console.log(this.textData)
                };
                rd.readAsBinaryString(f);
            },
            // clickrule1 () {
            //     this.show1 = true
            //     this.show2 = false
            //     this.show3 = false
            // },
            // clickrule2 () {
            //     this.show2 = true
            //     this.show1 = false
            //     this.show3 = false
            // },
            // clickrule3 () {
            //     this.show3 = true
            //     this.show1 = false
            //     this.show2 = false
            //
            // }
        }
    }
</script>

<style scoped>
    .home {
        background-color: #EAEBED;
        /*margin-top: 141px;*/
        width: 100%;
        position: relative;
    }
    .home_textarea {
        width: 1200px;
        margin: 0 auto;
    }
    .textarea {
        margin-top: 60px;
        margin-bottom: 40px;
    }
    .home_button {
        width: 140px;
        margin: 0 auto;
    }
    .button {
        width: 140px;
        background-color: #3467A5;
        color: white;
        margin-bottom: 40px;
    }
    .button:hover {
        color: #dea726;
    }
    .home_some {
        margin-top: 60px;
        height: 800px;
        background-color: #3467A5;
        position: relative;
    }
    .somebac {
        background-color: rgba(255, 255, 255, 0.6);
        height: 521px;
        width: 70%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .somecircle {
        width: 170px;
        height: 170px;
        background-color: #3467A5;
        border-radius: 50%;
        position: absolute;
        top: 110px;
        left: 190px;
    }
    .somecircle2 {
        width: 150px;
        height: 150px;
        background-color: #FD9192;
        border-radius: 50%;
        position: absolute;
        top: 120px;
        left: 200px;
        text-align:center;
    }
    .somecircle3 {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: absolute;
        text-align:center;
        transition: all 0.6s;
        cursor: pointer;
    }
    .somecircle3:hover {
        transform: scale(1.2,1.2);
    }
    .somecircle31 {
        background-color: #FD694E;
        top: 300px;
        left: 16%;
    }
    .somecircle32 {
        background-color: #5A58D6;
        top: 300px;
        left: 24%;
    }
    .somecircle33 {
        background-color: #4DC9FE;
        top: 420px;
        left: 16%;
    }
    .somecircle34 {
        background-color: #E9D602;
        top: 420px;
        left: 24%;
    }
    .somecircle35 {
        background-color: #EEAC39;
        top: 540px;
        left: 16%;
    }
    .somecircle36 {
        background-color: #91A5FE;
        top: 540px;
        left: 24%;
    }
    .sometext {
        width: 800px;
        height: 400px;
        background-color: white;
        border: 1px solid black;
        position: absolute;
        top: 55%;
        left: 55%;
        transform: translate(-55%, -55%);

    }
    .sometext1 {
        position: absolute;
        top: 65%;
        left: 82%;
        transform: translate(-82%, -65%);
    }
    .sometext2 {
        width: 150px;
        height: 120px;
        background-color: white;
        border: 1px solid black;
        margin-top: 10px;
    }
    .wordtext {
        color: black;
        font-weight: bold;
    }
    .somebutton {
        margin-top: 10px;
    }
    .word1 {
        vertical-align:middle;
        line-height: 100px;
        color: white;
        font-weight: bold;
    }
    .word2 {
        vertical-align:middle;
        line-height: 150px;
        color: white;
        font-weight: bold;
        font-size: 20px;
    }
    .imghome {
        background-color: #DDDEE0;
    }
    .imghome img {
        margin-left: 15%;
    }
    .contents {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        box-sizing: border-box;

    }
    .uploads >>> .el-upload--text {
    width: 80px;
    height: 32px;
    background-color: #EAEBED;
    border: 0 solid;
    }
</style>
<!--<style>-->

    <!--.el-scrollbar__wrap{-->
        <!--overflow-x: hidden;-->
    <!--}-->
<!--</style>-->
