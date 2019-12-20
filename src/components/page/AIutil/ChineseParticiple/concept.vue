<template>
    <div>
        <div>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-card class="box-card1" shadow="hover">
                        <div slot="header" class="clearfix headertext">
                            <span>分词技术</span>
                            <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                        </div>
                        <div style="height: 200px">
                            <el-scrollbar style="height: 100%" class="scrollbar">
                                <div style="margin: auto">
                                    <p class="ptext">就是搜索引擎针对用户提交查询的关键词串进行的查询处理后根据用户的关键词串用各种匹配方法进行的一种技术。当然，我们在进行数据挖掘、精准推荐和自然语言处理工作中也会经常用到中文分词技术。
                                    </p>
                                </div>
                            </el-scrollbar>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="16">
                    <el-card class="box-card1" shadow="hover">
                        <div slot="header" class="clearfix headertext">
                            <span>一、为什么要进行中文分词？</span>
                            <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                        </div>
                        <div style="height: 200px">
                            <el-scrollbar style="height: 100%" class="scrollbar">
                                <div>
                                    <p class="ptext">词是最小的能够独立活动的有意义的语言成分，英文单词之间是以空格作为自然分界符的，而汉语是以字为基本的书写单位，词语之间没有明显的区分标记，因此，中文词语分析是中文信息处理的基础与关键。</p>

                                    <p class="ptext">Lucene中对中文的处理是基于自动切分的单字切分，或者二元切分。除此之外，还有最大切分（包括向前、向后、以及前后相结合）、最少切分、全切分等等。</p>

                                </div>
                            </el-scrollbar>
                        </div>


                    </el-card>
                </el-col>
            </el-row>
            <el-row style="margin-top: 20px">
                <el-col>
                    <el-card class="box-card" shadow="hover">
                        <div slot="header" class="clearfix headertext">
                            <span>二、中文分词技术的分类</span>
                        </div>
                        <div style="width: 900px;margin: 0 auto">
                            <p class="ptext">我们讨论的分词算法可分为三大类：基于字典、词库匹配的分词方法；基于词频度统计的分词方法和基于字标注的分词方法。</p>
                            <p class="ptext">第一类方法应用词典匹配、汉语词法或其它汉语语言知识进行分词，如：正向最大匹配法、逆向最大匹配法、最小匹配方法等。这类方法简单、分词效率较高,但汉语语言现象复杂丰富，词典的完备性、规则的一致性等问题使其难以适应开放的大规模文本的分词处理（比如未登录词）。</p>
                            <p class="ptext">第二类基于统计的分词方法则基于字和词的统计信息，如把相邻字间的信息、词频及相应的共现信息等应用于分词，由于这些信息是通过调查真实语料而取得的，因而基于统计的分词方法具有较好的实用性。</p>
                            <p class="ptext">第三类基于字标注的分词方法实际上是构词方法。即把分词过程视为字在字串中的标注问题。由于每个字在构造一个特定的词语时都占据着一个确定的构词位置(即词位)，假如规定每个字最多只有四个构词位置：即B(词首)，M (词中)，E(词尾)和S(单独成词)，那么下面句子(甲)的分词结果就可以直接表示成如(乙)所示的逐字标注形式：</p>
                            <p class="ptext">(甲)分词结果：／上海／计划／N／本／世纪／末／实现／人均／国内／生产／总值／五千美元／。</p>
                            <p class="ptext">(乙)字标注形式：上／B海／E计／B划／E N／S 本／s世／B 纪／E 末／S 实／B 现／E 人／B 均／E 国／B 内／E生／B产／E总／B值／E 五／B千／M 美／M 元／E 。／S</p>
                            <p class="ptext">首先需要说明，这里说到的“字”不只限于汉字。考虑到中文真实文本中不可避免地会包含一定数量的非汉字字符，本文所说的“字”，也包括外文字母、阿拉伯数字和标点符号等字符。所有这些字符都是构词的基本单元。当然，汉字依然是这个单元集合中数量最多的一类字符。</p>
                            <p class="ptext">下面简要介绍几种常用方法:</p>
                            <h1 class="htext">1）逐词遍历法。</h1>
                            <p class="ptext">逐词遍历法将词典中的所有词按由长到短的顺序在文章中逐字搜索,直至文章结束。也就是说,不管文章有多短,词典有多大,都要将词典遍历一遍。这种方法效率比较低，大一点的系统一般都不使用。</p>
                            <h1 class="htext">2）基于字典、词库匹配的分词方法（机械分词法）</h1>
                            <p class="ptext">这种方法按照一定策略将待分析的汉字串与一个“充分大的”机器词典中的词条进行匹配，若在词典中找到某个字符串，则匹配成功。识别出一个词，根据扫描方向的不同分为正向匹配和逆向匹配。根据不同长度优先匹配的情况，分为最大（最长）匹配和最小（最短）匹配。根据与词性标注过程是否相结合，又可以分为单纯分词方法和分词与标注相结合的一体化方法。常用的方法如下：</p>
                            <p class="ptext">a、最大正向匹配法 (ＭａｘｉｍｕｍＭａｔｃｈｉｎｇＭｅｔｈｏｄ)通常简称为ＭＭ法。其基本思想为：假定分词词典中的最长词有i个汉字字符，则用被处理文档的当前字串中的前i个字作为匹配字段，查找字典。若字典中存在这样的一个i字词，则匹配成功，匹配字段被作为一个词切分出来。如果词典中找不到这样的一个i字词，则匹配失败，将匹配字段中的最后一个字去掉，对剩下的字串重新进行匹配处理…… 如此进行下去，直到匹配成功，即切分出一个词或剩余字串的长度为零为止。这样就完成了一轮匹配，然后取下一个i字字串进行匹配处理，直到文档被扫描完为止。</p>
                            <p class="ptext">其算法描述如下：</p>
                            <p class="ptext">(1)初始化当前位置计数器，置为0；</p>
                            <p class="ptext">(2)从当前计数器开始，取前2i个字符作为匹配字段，直到文档结束；</p>
                            <p class="ptext">(3)如果匹配字段长度不为0，则查找词典中与之等长的作匹配处理。</p>
                            <p class="ptext">如果匹配成功则，</p>
                            <p class="ptext">a)把这个匹配字段作为一个词切分出来，放入分词统计表中；</p>
                            <p class="ptext">b)把当前位置计数器的值加上匹配字段的长度；</p>
                            <p class="ptext">c)跳转到步骤2);</p>
                            <p class="ptext">否则</p>
                            <p class="ptext">a) 如果匹配字段的最后一个字符为汉字字符，</p>
                            <p class="ptext">则</p>
                            <p class="ptext">①把匹配字段的最后一个字去掉；</p>
                            <p class="ptext">②匹配字段长度减2；</p>
                            <p class="ptext">否则</p>
                            <p class="ptext">①把匹配字段的最后一个字节去掉；</p>
                            <p class="ptext">②匹配字段长度减1；</p>
                            <p class="ptext">b)跳转至步骤3）；</p>
                            <p class="ptext">否则</p>
                            <p class="ptext">a)如果匹配字段的最后一个字符为汉字字符，</p>
                            <p class="ptext">则 当前位置计数器的值加2；</p>
                            <p class="ptext">否则当前位置计数器的值加1；</p>
                            <p class="ptext">b)跳转到步骤2)。</p>
                            <p class="ptext">b、逆向最大匹配法 (ＲｅｖｅｒｓｅＭａｘｉｍｕｍＭａｔｃｉｎｇＭｅｔｈｏｄ)通常简称为ＲＭＭ法。ＲＭＭ法的基本原理与ＭＭ法相同 ,不同的是分词切分的方向与MM法相反，而且使用的分词辞典也不同。逆向最大匹配法从被处理文档的末端开始匹配扫描，每次取最末端的2i个字符（i字字串）作为匹配字段，若匹配失败，则去掉匹配字段最前面的一个字，继续匹配。相应地，它使用的分词词典是逆序词典，其中的每个词条都将按逆序方式存放。在实际处理时，先将文档进行倒排处理，生成逆序文档。然后，根据逆序词典，对逆序文档用正向最大匹配法处理即可。</p>
                            <h1 class="htext">3). 全切分和基于词的频度统计的分词方法</h1>
                            <p class="ptext">全切分</p>
                            <p class="ptext">全切分要求获得输入序列的所有可接受的切分形式，而部分切分只取得一种或几种可接受的切分形式，由于部分切分忽略了可能的其他切分形式，所以建立在部分切分基础上的分词方法不管采取何种歧义纠正策略，都可能会遗漏正确的切分，造成分词错误或失败。而建立在全切分基础上的分词方法，由于全切分取得了所有可能的切分形式，因而从根本上避免了可能切分形式的遗漏，克服了部分切分方法的缺陷。</p>
                            <p class="ptext">全切分算法能取得所有可能的切分形式，它的句子覆盖率和分词覆盖率均为100%，但全切分分词并没有在文本处理中广泛地采用，原因有以下几点：</p>
                            <p class="ptext">a)全切分算法只是能获得正确分词的前提，因为全切分不具有歧义检测功能，最终分词结果的正确性和完全性依赖于独立的歧义处理方法，如果评测有误，也会造成错误的结果。</p>
                            <p class="ptext">b)全切分的切分结果个数随句子长度的增长呈指数增长，一方面将导致庞大的无用数据充斥于存储数据库；另一方面当句长达到一定长度后，由于切分形式过多,造成分词效率严重下降。</p>
                            <p class="ptext">基于词的频度统计的分词方法：</p>
                            <p class="ptext">这是一种全切分方法。它不依靠词典,而是将文章中任意两个字同时出现的频率进行统计,次数越高的就可能是一个词。它首先切分出与词表匹配的所有可能的词,运用统计语言模型和决策算法决定最优的切分结果。它的优点在于可以发现所有的切分歧义并且容易将新词提取出来。</p>
                            <h1 class="htext">4)．基于知识理解的分词方法（基于字标注）</h1>
                            <p class="ptext">该方法主要基于句法、语法分析，并结合语义分析，通过对上下文内容所提供信息的分析对词进行定界，它通常包括三个部分：分词子系统、句法语义子系统、总控部分。在总控部分的协调下，分词子系统可以获得有关词、句子等的句法和语义信息来对分词歧义进行判断。这类方法试图让机器具有人类的理解能力，需要使用大量的语言知识和信息。由于汉语语言知识的笼统、复杂性，难以将各种语言信息组织成机器可直接读取的形式。因此目前基于知识的分词系统还处在试验阶段。</p>
                        </div>



                        <!--<div style="width: 900px;margin: 0 auto">-->
                        <!--<el-image :src="url" :preview-src-list="srcList" style="width: 900px"></el-image>-->
                        <!--</div>-->
                    </el-card>
                </el-col>
            </el-row>
        </div>

    </div>
</template>

<script>
    export default {
        name: "concept"
    }
</script>

<style scoped>
    .item {
        padding: 18px 0;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
    /*.box-card {*/
    /*width: 480px;*/
    /*}*/
    .headertext {
        font-size: 24px;font-weight: bold
    }
    .ptext {
        text-indent: 2em;
        margin-bottom: 10px;
        line-height: 28px;
    }
    .box-card1 {
        height: 250px;
    }
    .htext {
        font-size: 22px;
    }
    .img {
        margin-top: 20px;margin-bottom: 20px
    }
    .scrollbar >>> .el-scrollbar__wrap{
        overflow-x: hidden;

    }
</style>
