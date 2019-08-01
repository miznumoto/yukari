/**
 * 
 * 
 */

$(document).ready(function () {
    var getId = sessionStorage.getItem('img');
    if (getId == null) {
        getId = "i1";
   
    }
    console.log(getId);
    change(getId);
});
function change(il) {
    var getId = il;
    sessionStorage.setItem('img', getId);
    sessionStorage.setItem('data' , getId);
    var comment = "$('.commentIn')";
    var chImg = "img/" + getId + ".jpg";
    var chJimg = "img/j_" + getId + ".jpg";
    var tag = document.getElementById("detailcontentbox");
    document.getElementById("detailimg").setAttribute("src", chImg);
    if (getId.indexOf("p_") > -1) {
        var plusJimg = getId.substring(2);
        chJimg = "img/j_" + plusJimg + ".jpg";
        document.getElementById("detailNameImg").setAttribute("src", chJimg);
    } else {
        document.getElementById("detailNameImg").setAttribute("src", chJimg);
    }
    if (getId == "i1" || getId == "p_i1") {
        if (getId == "i1") {
            document.getElementById("cardName").innerHTML = "水本ゆかり";
            $(".commentIn *").remove();
            $("#fst_cmi_fst")
                .append(
                    '<div class="comment_comment">…水本ゆかりと申します｡幼少のころよりﾌﾙｰﾄをやっていましたから､音感は良いんですよ｡人前で歌ったことはありませんけれど…ﾌﾟﾛﾃﾞｭｰｻｰさん､ご指導､よろしくお願いします｡</div>');
            $("#fst_cmi_scd").append(
                '<div class="comment_comment">…おはようございます</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">…あら?</div>');
            $("#fst_cmi_scd").append(
                '<div class="comment_comment">たまにはﾌﾙｰﾄも…いいですよね</div>');
            $("#fst_cmi_scd")
                .append(
                    '<div class="comment_comment">ﾌﾟﾛﾃﾞｭｰｻｰさん､今日も…ご指導､お願いします｡</div>');
            $("#scd_cmi_fst").append(
                '<div class="comment_comment">今日もお願いしますね</div>');
            $("#scd_cmi_fst").append(
                '<div class="comment_comment">はい､ちょっと緊張して…</div>');
            $("#scd_cmi_fst")
                .append('<div class="comment_comment">ﾀﾞﾝｽ…ですか…</div>');
            $("#scd_cmi_fst")
                .append(
                    '<div class="comment_comment">ﾌﾟﾛﾃﾞｭｰｻｰ､今の私､どうですか?…おかしくないですか?</div>');
            $("#scd_cmi_scd")
                .append(
                    '<div class="comment_comment">プロデューサーﾌﾟﾛﾃﾞｭｰｻｰさんは頼りになりますね…｡</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">私…頑張ります</div>');
            $("#trd_cmi_fst")
                .append(
                    '<div class="comment_comment">私､ﾌﾟﾛﾃﾞｭｰｻｰさんにご指導いただけて感謝しています…｡</div>');
            $("#trd_cmi_scd")
                .append(
                    '<div class="comment_comment">プロデューサーﾌﾟﾛﾃﾞｭｰｻｰさんのおかげで､いい感じです…!</div>');
            $("#trd_cmi_trd")
                .append(
                    '<div class="comment_comment">プロデューサーﾌﾟﾛﾃﾞｭｰｻｰさんだったら…きっとｱｲﾄﾞﾙとして大事にしてくれるって思ってました…｡だから､嬉しいです…｡</div>');
        } else {
            document.getElementById("cardName").innerHTML = "水本ゆかり+";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">水本ゆかりです｡私､こんなかわいい服は初めて着ました…｡なんだかうれしくって､楽しいです｡歌いたくなる気分って､初めてです｡これがｱｲﾄﾞﾙってことなのかもしれませんね!</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">…おはようございます</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">…あら?</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">この衣装､かわいいです…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">プロデューサーさん､今日も…お願いしますね｡</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">今日もお願いしますね</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">はい､ちょっと緊張して…/div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">ﾀﾞﾝｽも､頑張ります</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">プロデューサーさんが見ててくれるなら､きっと大丈夫…｡</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">プロデューサーさんの言う事なら､何でも聞けそう…｡</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">私…負けません</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">私､プロデューサーさんに教えてもらえて嬉しいです…｡</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">プロデューサーさんのおかげで､すごく…いい感じです…!</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">プロデューサーさん､私の事…ｱｲﾄﾞﾙとしてだけではなく､ちゃんと見てくださいね…｡私のこと､ちゃんと…｡</div>');
        }

    } else if (getId == "i2" || getId == "p_i2") {
        if (getId == "i2") {
            document.getElementById("cardName").innerHTML = "[純粋奏者]水本ゆかり";
            $(".commentIn *").remove();
            $("#fst_cmi_fst")
                .append(
                    '<div class="comment_comment">あっ､ﾌﾟﾛﾃﾞｭｰｻｰさん…聞いてたんですか? 歌やﾀﾞﾝｽも楽しいですけど､私はやっぱりﾌﾙｰﾄの演奏も好きですね｡最近お仕事で忙しかったから､音色でﾘﾗｯｸｽしてくれたら嬉しいです…ねっ?</div>');
            $("#fst_cmi_scd").append(
                '<div class="comment_comment">新しいｺﾄはいい刺激になります</div>');
            $("#fst_cmi_scd").append(
                '<div class="comment_comment">ﾌﾌ､ｱｲﾄﾞﾙのお友達が増えました</div>');
            $("#fst_cmi_scd").append(
                '<div class="comment_comment">新しい趣味も見つけたいですね</div>');
            $("#fst_cmi_scd")
                .append(
                    '<div class="comment_comment">音葉さん､星花さんとあいさんと…演奏会が出来ちゃいますね?</div>');
            $("#scd_cmi_fst").append(
                '<div class="comment_comment">次の現場はどこですか?</div>');
            $("#scd_cmi_fst").append(
                '<div class="comment_comment">お仕事って楽しいです…♪</div>');
            $("#scd_cmi_fst").append(
                '<div class="comment_comment">色んなお仕事してみたいです♪</div>');
            $("#scd_cmi_fst")
                .append(
                    '<div class="comment_comment">事務所の皆でも､ｱｲﾄﾞﾙとしてはﾗｲﾊﾞﾙですよプロデューサーさん!</div>');
            $("#scd_cmi_scd")
                .append(
                    '<div class="comment_comment">どうかな? 私だってｲﾛｲﾛ成長したんですよ､プロデューサーさん!</div>');
            $("#scd_cmi_trd").append(
                '<div class="comment_comment">いっぱい楽しんできますね</div>');
            $("#trd_cmi_fst")
                .append(
                    '<div class="comment_comment">プロデューサーさんも私と一緒に新しいｺﾄ､なにか始めませんか?</div>');
            $("#trd_cmi_scd")
                .append(
                    '<div class="comment_comment">プロデューサーさん! 私…ｱｲﾄﾞﾙとして成長したって思います?</div>');
            $("#trd_cmi_trd")
                .append(
                    '<div class="comment_comment">ﾌﾟﾛﾃﾞｭｰｻｰさんや…事務所の皆のおかげで日々成長してるって思うんです! これも…プロデューサーさんのおかげですから…!</div>');
        } else {
            document.getElementById("cardName").innerHTML = "[純粋奏者]水本ゆかり+";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">趣味でもなんでも新しい事っていいですね｡これからも色んな事にﾁｬﾚﾝｼﾞして､ﾄ…ﾄｯﾌﾟｱｲﾄﾞﾙを…目指したいです｡…プロデューサーさん､これからも私と一緒に成長してくださいね? …ね♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">新しいｺﾄはいい刺激になります</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ﾌﾌ､ｱｲﾄﾞﾙのお友達が増えました</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">最近LIVEのために筋ﾄﾚしてます</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">プロデューサーさん､私お芝居やﾄｰｸにもﾁｬﾚﾝｼﾞしてみたい…です</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">次の現場はどこですか?</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">お仕事って楽しいです…♪</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">…実はお芝居に興味があります</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">プロデューサーさん､私を応援してくれるﾌｧﾝの人がいるんですね</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">お仕事は慣れたけど､プロデューサーさんには頼っちゃいます♪</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">みんなに喜んでもらいます</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">プロデューサーさんと､皆と過ごす時間が何よりも楽しいです…!</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">プロデューサーさん｡私…あなたとﾄｯﾌﾟｱｲﾄﾞﾙになりたい…!</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">私､一生懸命頑張ってﾄｯﾌﾟｱｲﾄﾞﾙになります…! そ､そのときはプロデューサーさんっ! 私の事だけを見て下さい…約束です…</div>');
        }

    } else if (getId == "i3" || getId == "p_i3") {
        if (getId == "i3") {
            document.getElementById("cardName").innerHTML = "[ｳﾞｫﾔｰｼﾞｭ･ﾋｰﾗｰ]水本ゆかり";
            $(".commentIn *").remove();
            $("#fst_cmi_fst")
                .append(
                    '<div class="comment_comment">『うふ…うふふ…皆､枯れ落ちてしまえばいい…｡花も鳥も人も…命あるもの全て枯れ落ちて､尽く土に返れ…｡全てが滅びた静寂こそ本当の癒やし…｡』…あら? 感情､込めすぎてます…?</div>');
            $("#fst_cmi_scd").append(
                '<div class="comment_comment">これが私の衣装…なんですね</div>');
            $("#fst_cmi_scd").append(
                '<div class="comment_comment">喜びをつむぐ調べ…なんて…</div>');
            $("#fst_cmi_scd").append(
                '<div class="comment_comment">痛みも苦しみもない世界なんて</div>');
            $("#fst_cmi_scd")
                .append(
                    '<div class="comment_comment">『何も考えず…ゆっくり朽ちてゆけ…』こんな台詞､私…</div>');
            $("#scd_cmi_fst").append(
                '<div class="comment_comment">ｼﾗﾝｸｽの響きの中で…</div>');
            $("#scd_cmi_fst").append(
                '<div class="comment_comment">等しく全てのものへ…</div>');
            $("#scd_cmi_fst").append(
                '<div class="comment_comment">心おだやかに…果てましょう</div>');
            $("#scd_cmi_fst")
                .append(
                    '<div class="comment_comment">『命あるものは必ず滅びます…これが自然の摂理ですから…』</div>');
            $("#scd_cmi_scd")
                .append(
                    '<div class="comment_comment">プロデューサーさん…『貴方の言葉が…心の琴線に触れて…』</div>');
            $("#scd_cmi_trd").append(
                '<div class="comment_comment">神へ捧げるﾒﾛﾃﾞｨｰ…</div>');
            $("#trd_cmi_fst")
                .append(
                    '<div class="comment_comment">ﾙｼｵｰﾈさんと果てるならそれも幸せ…｡ふふ､なんでも…</div>');
            $("#trd_cmi_scd")
                .append(
                    '<div class="comment_comment">『優しく爪弾くようなプロデューサーさんの声…胸が…熱い…』</div>');
            $("#trd_cmi_trd")
                .append(
                    '<div class="comment_comment">『プロデューサーさんの言葉とぬくもりが大切なﾓﾉを思い出させてくれる…｡…心…愛…そうです｡それが神の祝福ですよね』</div>');
        } else {
            document.getElementById("cardName").innerHTML = "[ｳﾞｫﾔｰｼﾞｭ･ﾋｰﾗｰ]水本ゆかり+";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">『この世の全てに神の祝福があらんことを…｡この歌は生あるものへの命の賛美｡この想いは純粋なる祈り…｡天の導きに､神の愛を奏でましょう』ふふ…今なら澄んだ音色を演奏できそう</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">これが私の衣装…なんですね</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">喜びをつむぐ調べ…なんて…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">癒やします｡心も身体も…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">愛を歌う事が､本当の癒やし｡…本当にそうなのかもしれません</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">ｼﾗﾝｸｽの響きの中で…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">等しく全てのものへ…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">皆さんの為に祈ります…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">『伝え､癒やし､導く｡大丈夫です｡もう私に迷いはありません』</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment"> 『信じます｡神も愛も…貴方のことも…』…気恥ずかしいです</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">愛の歌を届けます</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">私､プロデューサーさんに教えてもらえて嬉しいです…｡</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">プロデューサーさんのおかげで､すごく…いい感じです…!</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">プロデューサーさん､私の事…ｱｲﾄﾞﾙとしてだけではなく､ちゃんと見てくださいね…｡私のこと､ちゃんと…｡</div>');
        }

    } else if (getId == "i4" || getId == "p_i4") {
        if (getId == "i4") {
            document.getElementById("cardName").innerHTML = "[ｳﾞｫﾔｰｼﾞｭ･ﾋｰﾗｰ]水本ゆかり";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">最近､お友達から｢顔つきが変わってきたね｣と言われました｡笑顔が､素敵だと｡間違いなくプロデューサーさんの影響だと思います｡なぜって…私を導いてくださる大切な指揮者ですから…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">褒められるのは…嬉しいですね</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">自信…出ているかもしれません</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">お友達は､ｱｲﾄﾞﾙのみんなです</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">私も自分の気持ちが豊かになっていると…そう思いますね</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">これが今の私の音色です…♪</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">響かせてみたいです…もっと</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">次の目標は､元気な笑顔…かな?</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">ﾌﾙｰﾄだけでなく､ｱｲﾄﾞﾙとしての音色も深めたいと思います</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">プロデューサーさんと過ごす時間は､私を磨いてくれますから…</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">私の新しい音色…どうぞ</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">ｱｲﾄﾞﾙとしての経験もプロデューサーさんのおかげですから…</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">優しい音色の様なｱｲﾄﾞﾙに…プロデューサーさんとなら､きっと</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">プロデューサーさんと一緒の時間を重ねるたびに､私の音も彩りを増す…そんな風に思います｡もっと幸せな音色､重ねたいです</div>');
        } else {
            document.getElementById("cardName").innerHTML = "[ｳﾞｫﾔｰｼﾞｭ･ﾋｰﾗｰ]水本ゆかり+";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">ｽﾃｰｼﾞに立つと､いつも思います…ありがとうって｡応援してくださるﾌｧﾝはもちろんですけど､一緒に立って競い合う仲間もいて…プロデューサーさんが見守ってくれていますから…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">褒められるのは…嬉しいですね</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">自信…出ているかもしれません</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">るい私をｲﾒｰｼﾞしてみました</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ﾕﾆｯﾄ衣装は…嬉しいです｡お揃いで､安心感がありますからね</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">これが今の私の音色です…♪</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">かせてみたいです…もっと</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">うん…元気に明るく､ですね</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">力強くて可愛い歌声を…私もみんなに聞いてほしいですから</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">期待に応えます｡ﾌｧﾝの期待と…プロデューサーさんの期待にも</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">聞いて下さい｡私たちの歌</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">やはりプロデューサーさんに見てもらわないと…どうですか</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">プロデューサーさん､背中を押してください｡それだけで十分です</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">みんなのﾊｰﾓﾆｰで､ﾌｧﾝに笑顔をあげられて嬉しいです｡でも､一番嬉しいのはプロデューサーさんの笑顔｡特別ですから…ふふ♪</div>');
        }
    } else if (getId == "i5" || getId == "p_i5") {
        if (getId == "p_i5") {
            document.getElementById("cardName").innerHTML = "[ｳｪﾃﾞｨﾝｸﾞ]I.C水本ゆかり+";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">お恥ずかしい話ですが､ほとんど家事の経験がないんです｡過保護な父や母に､つい甘えてしまって…｡今回のお仕事を機に､きちんと家事をこなせる女性に成長したいと思います</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">家事は､知識だけなら一応…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">基礎からきちんと学びたいです</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">まずは整理整頓から…!</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ふふ､このｴﾌﾟﾛﾝは千枝ちゃんたちとお揃いの柄なんです</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">実践して…体で覚えますね</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">家事のﾚｯｽﾝにも打ち込みます</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">ﾌﾙｰﾄを習い始めた頃みたい…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">少しずつ､焦らず､着実に…覚えていきますね</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">ﾙｼｵｰﾈさんのおかげで､花嫁のﾚｯｽﾝも順調ですよ</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">花嫁一年生､ですね</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">プロデューサーさんは家事がお得意そうです｡当たり､ですか?</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">私の花嫁修業…見ていてくださいね､プロデューサーさん</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">この花嫁修業を無事に終えたら､私､いつでもお嫁に行けますね｡ふふふ､大丈夫､まだｱｲﾄﾞﾙはやめませんよ､プロデューサーさん</div>');
        }
    } else if (getId == "i6" || getId == "p_i6") {
        if (getId == "i6") {
            document.getElementById("cardName").innerHTML = "[ｽｸｰﾙﾒﾛﾃﾞ]ｨｰ水本ゆかり";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">いつもは着ない制服を着られて､楽しいです｡プロデューサーさん､時間はまだ大丈夫ですよね? 衣装合わせが終わったら､他のも試着させてくれるそうで…私､他にも着たい制服があるんです</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">もっと近くで見てみますか…?</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">褒められると顔がほころびます</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ﾎﾟｰｽﾞも､取ってみました</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ｾｰﾗｰ服にﾌﾞﾚｻﾞｰ…この風変わりなのは､魔法学校? ふふ､面白い</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">自然体の私で臨みますね</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">ﾈｸﾀｲをするのは新鮮です</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">素敵なﾃﾞｻﾞｲﾝに目移りします</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">物語の主人公のよう…｡王立音楽学校の生徒､なんていいかも</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">プロデューサーさんの制服姿…きっと凛々しかったのでしょうね</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">お好きな私を選んで下さい</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">プロデューサーさん､私に合いそうなのがあったら教えて下さい</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">プロデューサーさんも着てみませんか? 私､選んでみたいです</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">いろんな制服を着て､ついはしゃいでしまいました｡プロデューサーさんと一緒に､学校に通う…ちょっぴり､憧れのｼｰﾝかも…</div>');

        } else {
            document.getElementById("cardName").innerHTML = "[ｽｸｰﾙﾒﾛﾃﾞ]ｨｰ水本ゆかり+";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment"><学園祭をぜひ楽しんでいってくださいね! 出店やｲﾍﾞﾝﾄがたくさんありますから､きっと喜んでいただける時間になりますよ｡…ふふっ､学園祭の設定だなんて､面白い撮影になりそうです/div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">もっと近くで見てみますか…?</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">褒められると顔がほころびます</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">本物の学園祭に来たみたいに…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">休憩時間になったら､宣伝を兼ねて…出店を回ってみましょう</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">自然体の私で臨みますね</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">ﾈｸﾀｲをするのは新鮮です</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">何色がお好みですか?</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">校門で最初に会うのは私ですから､笑顔でお出迎えします</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">プロデューサーさん､生徒になったつもりで校内を歩きませんか</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">私たちの学園祭へようこそ</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">プロデューサーさんと同じ学校に通えたら､毎日が楽しそうです</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">プロデューサー､先輩…ふふっ､すみません､呼んでみただけです</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">撮影もお祭りも､終わると寂しいですよね…｡そうだ､プロデューサーさん､後夜祭代わりに､ささやかな打ち上げをしませんか</div>');
        }
    }
    else if (getId == "i7" || getId == "p_i7") {
        if (getId == "i7") {
            document.getElementById("cardName").innerHTML = "[夏島☆ｼｰｻｲﾄﾞ]水本ゆかり";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">みんな､南の島をとても楽しんでいて…ふふっ､笑顔が眩しいです｡私は､少し休憩を…｡隣に座ってもいいですか? 遊ぶ時間も､プロデューサーさんと語らう時間も､楽しみたいですから…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">広大な海に…心まで洗われます</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">楽しい時間に､しましょうね♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">みんなの笑い声…素敵な音色…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">友達に相談しながら選んだ水着なんです｡お気に入り､です…♪</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">さざめく波の音を､伴奏に…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">今日は少し､冒険したいんです</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">前より､遠くまで泳げました♪</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">自分のﾍﾟｰｽで泳ぐのも､お水に浮いているのも楽しいですよね</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">綺麗な貝殻を見つけたので…プロデューサーさん､どうぞ♪</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">ﾊﾞﾀ足競争なら､少々…</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">プロデューサーさんと過ごす海は…新しい発見の連続です♪</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">少し休んだら､また海で遊びに…プロデューサーさんも､ぜひ♪</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">仲間やプロデューサーさんと味わう､海の楽しさ…今の私だから､感じられる喜びですね｡今日はたくさん､思い出を作りましょう</div>');
        } else {
            document.getElementById("cardName").innerHTML = "[夏島☆ｼｰｻｲﾄﾞ]水本ゆかり+";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">ようこそお越しくださいました♪これより紡がれる旋律は､妖精たちが歌い踊る夏の幻想…｡忘れられない夢の世界へ､私たちがみなさんを連れ出します｡さぁ､耳を澄ませて…始めましょう!</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">広大な海に…心まで洗われます</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">楽しい時間に､しましょうね♪/div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">どんな夢を､見せましょうか♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">刻々と変わる夏の景色…心に焼き付けます｡忘れないように…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">さざめく波の音を､伴奏に…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">今日は少し､冒険したいんです</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">青く澄んだ歌…心に響きますね</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">心が躍って､走り出してしまいそう…｡これが情熱の力､ですね</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">情熱の色が､背を押してくれます｡プロデューサーさんのように…</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">力強い音､聴こえます!</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">私も､輝きます｡プロデューサーさんに磨かれたﾙﾋﾞｰとして…</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">赤く､燃えあがる煌めきを…あなたに､見てもらいたくて…</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">あふれ出す情熱を､高らかに…プロデューサーさんの心に響くよう歌います｡私の声が届いたら､大きな歓声で応えてください♪</div>');
        }
    }
    else if (getId == "i8" || getId == "p_i8") {
        if (getId == "i8") {
            document.getElementById("cardName").innerHTML = "[夏島☆ｼｰｻｲﾄﾞ]水本ゆかり";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">みんな､南の島をとても楽しんでいて…ふふっ､笑顔が眩しいです｡私は､少し休憩を…｡隣に座ってもいいですか? 遊ぶ時間も､プロデューサーさんと語らう時間も､楽しみたいですから…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">広大な海に…心まで洗われます</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">楽しい時間に､しましょうね♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">みんなの笑い声…素敵な音色…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">友達に相談しながら選んだ水着なんです｡お気に入り､です…♪</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">さざめく波の音を､伴奏に…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">今日は少し､冒険したいんです</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">前より､遠くまで泳げました♪</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">自分のﾍﾟｰｽで泳ぐのも､お水に浮いているのも楽しいですよね</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">綺麗な貝殻を見つけたので…プロデューサーさん､どうぞ♪</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">ﾊﾞﾀ足競争なら､少々…</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">プロデューサーさんと過ごす海は…新しい発見の連続です♪</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">少し休んだら､また海で遊びに…プロデューサーさんも､ぜひ♪</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">仲間やプロデューサーさんと味わう､海の楽しさ…今の私だから､感じられる喜びですね｡今日はたくさん､思い出を作りましょう</div>');
        } else {
            document.getElementById("cardName").innerHTML = "[夏島☆ｼｰｻｲﾄﾞ]水本ゆかり+";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">ようこそお越しくださいました♪これより紡がれる旋律は､妖精たちが歌い踊る夏の幻想…｡忘れられない夢の世界へ､私たちがみなさんを連れ出します｡さぁ､耳を澄ませて…始めましょう!</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">広大な海に…心まで洗われます</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">楽しい時間に､しましょうね♪/div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">どんな夢を､見せましょうか♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">刻々と変わる夏の景色…心に焼き付けます｡忘れないように…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">さざめく波の音を､伴奏に…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">今日は少し､冒険したいんです</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">青く澄んだ歌…心に響きますね</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">心が躍って､走り出してしまいそう…｡これが情熱の力､ですね</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">情熱の色が､背を押してくれます｡プロデューサーさんのように…</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">力強い音､聴こえます!</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">私も､輝きます｡プロデューサーさんに磨かれたﾙﾋﾞｰとして…</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">赤く､燃えあがる煌めきを…あなたに､見てもらいたくて…</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">あふれ出す情熱を､高らかに…プロデューサーさんの心に響くよう歌います｡私の声が届いたら､大きな歓声で応えてください♪</div>');
        }
    }
    else if (getId == "i9" || getId == "p_i9") {
        if (getId == "i9") {
            document.getElementById("cardName").innerHTML = "[ﾌﾙｰﾃｨｵｰﾀﾑ]水本ゆかり";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">幸せのｺﾂ､その一｡生地の中央を窪ませること…と｡ふふっ､美味しいｹｰｷの焼き方ですよ｡この前､母が教えてくれたんです｡ほかのｺﾂは…一緒に探しましょうね､プロデューサーさん♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">もっと近くで…はい､どうぞ♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">貴方に､この幸せな甘さを…</div > ');
            $("#fst_cmi_scd").append('<div class="comment_comment">幸せ大盛りですね､裕子さん</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">生地は丁寧に…こうすると､中心までしっかり火が通るんです</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">秋の香り…｡ふふっ､楽しみです</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">見て､心に留めてくださいね♪</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">ｵｰﾌﾞﾝの予熱､お任せします…!</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">みんなで作ったｹｰｷですもの｡幸せな美味しさに溢れてますよ</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">やりました､プロデューサーさん♪またひとつ幸せのｺﾂ､発見です</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">今のうちにお茶の用意を♪</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">プロデューサーさんも､幸せのｺﾂをたくさんご存知ですよね♪</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">ｹｰｷの焼き上がりが待ちきれませんか? ふふっ､実は私もです♪</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">ｹｰｷを美味しくするには､プロデューサーさんの笑顔を思い浮かべながら作ること…ですね｡それが､一番大事な幸せのｺﾂ…♪</div>');
        } else {
            document.getElementById("cardName").innerHTML = "[ﾌﾙｰﾃｨｵｰﾀﾑ]水本ゆかり+";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">実りの季節ですね｡私は…実るというには､まだまだ至らぬ身です｡けれど､プロデューサーさん｡衣にそっと秋をあしらったなら､どうでしょうか? 私の色合いと甘味…ほど良く撮り頃ですよ♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">もっと近くで…はい､どうぞ♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">方に､この幸せな甘さを…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">胸の思いも深まる季節､ですね</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">いつもよりも…心がｳｷｳｷと沸き立つ秋になりそうな予感です</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">秋の香り…｡ふふっ､楽しみです</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">見て､心に留めてくださいね♪</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">陽が短くなってきましたね…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">秋の輝く黄金色｡私も､綺麗に染まっていきたいと…願ってます</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">プロデューサーさんに見守られ､私も成熟していくんですね…</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">貴方の秋を教えてください</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">今日の装いはﾊﾟｰｼﾓﾝ｡渋い魅力は､私にはまだ早いでしょうか?</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">このまま､ふたりで秋のﾋﾟｸﾆｯｸに出かけたら素敵でしょうね♪</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">このまま…｡今はこのままが…いいです｡静かに季節を感じ､味わっていたいんです｡プロデューサーさんと迎えた､実りの秋を…</div>');
        }

    }
    else if (getId == "i10" || getId == "p_i10") {
        if (getId == "i10") {
            document.getElementById("cardName").innerHTML = "[爽やかｺﾝﾌｨﾁｭｰﾙ]水本ゆかり";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">あの…はしたないなんて､思わないでくれますか? こうして食べると美味しいと､里奈さんから教えていただいて…｡まあ､プロデューサーさんもご存知でしたか｡では､ご一緒に…ぱくっ♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">小腹を満たす味方､ですね</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">軽やかな時間ですね♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">こぼさないよう､慎重に…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ﾋﾞﾀｰなｸｯｷｰに､ほんのり甘い牛乳…互いを引き立てていますね</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">ちょこんと…でも､勢いよく…!</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">服装…? ええ､挑戦したくって!</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">ﾐﾙｸｸｯｷｰもご用意してます</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">私､変わりました? 自分では､良い変化だと思ってるんですよ</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">プロデューサーさんも休憩しませんか? 心が穏やかになりますよ</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">この食べ方も美味しいです</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">このﾏｸﾞｶｯﾌﾟは､いつかプロデューサーさんと訪れた雑貨屋で…♪</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">ﾚｯｽﾝ後の甘いもの…少しだけ､罪の味がしますね｡ふふっ</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">私の知らないことは､まだたくさん｡その一つ一つを仲間や､プロデューサーさんに教えていただける…私の､幸せな日常です</div>');
        } else {
            document.getElementById("cardName").innerHTML = "[爽やかｺﾝﾌｨﾁｭｰﾙ]水本ゆかり+";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">夏を楽しく過ごすｺﾂ､知っていますか? それは…初夏を快活にｽﾀｰﾄさせること｡ﾋﾞﾀﾐﾝたっぷり爽やかｼﾞｭﾚで､元気も美容もﾌﾚｯｼｭﾁｬｰｼﾞ♪私と一緒に始めましょうっ､美味しい夏の新習慣!</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">小腹を満たす味方､ですね</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">軽やかな時間ですね♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ﾄﾞﾙﾁｪ…いえ､ｱﾆﾏｰﾄで!</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ほかにﾁｪﾘｰ味､ﾌﾞﾄﾞｳ味…ﾐﾝﾄ味なんてものも? 気になります</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">ちょこんと…でも､勢いよく…!</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">服装…? ええ､挑戦したくって!</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">ﾊﾟﾜﾌﾙなｵﾚﾝｼﾞMIX味ですよ</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">さっぱり甘くて美味しいだけじゃありません｡おひとつどうぞ</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">忙しいプロデューサーさんでも､手軽に食べられそうですよね</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">やみつきになりますよ</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">あっ…お食事はきちんととってくださいね? 抜くのはなしです</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">自然と弾んでしまって｡でも…こんな私も､見てもらいたいです</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">今からﾊﾞﾃてしまっていては駄目ですよ? プロデューサーさんには､夏も冬も､私と笑顔でお仕事していただきたいですから</div>');
        }

    } else if (getId == "i11" || getId == "p_i11") {
        if (getId == "i11") {
            document.getElementById("cardName").innerHTML = "[清純令嬢]水本ゆかり";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">ふあぁ…あれ…プロデューサーさん…? どうして…わたしのへやに…ぷろでゅｰさｰさんがいるの…? んあ…事務所…ごめんなさい､わたし寝ちゃいました…でももう少しだけ…すぅ…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">プロデューサーさん……</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">うふふ…楽しいです…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ゆめの…舞台…だから…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">新しいおしごと…演劇の…ずｰっと台本おぼえて…て…うｰん</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">…夢で…みたから…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">あの…舞台に…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">おしばい…いっぱいれんしゅう</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">ふあぁ…台本おぼえなきゃ…プロデューサーさんもいっしょに…</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">プロデューサーさん…うれしいですｰ…えへへ……</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">もぅ…起きてますからぁ…</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">プロデューサーさん…いつもそばにいてくれて…ありがとう…</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">ﾙｼｵｰﾈさんのおかげで…おしごと…楽しいから…</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">だんだん…頭が冴えてきました…あの…さっきまでの事は忘れていただけると…かなり恥ずかしいこと…言ってました…よね</div>');
        } else {
            document.getElementById("cardName").innerHTML = "[清純令嬢]水本ゆかり+";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">ｽﾎﾟｯﾄﾗｲﾄの光に照らされて､全身で感動を伝える…演じることもｱｲﾄﾞﾙのお仕事の1つなのですね｡この拍手は､そんな世界を教えてくれたプロデューサーさんにも聞いていただきたいです…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">プロデューサーさん……</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">うふふ…楽しいです…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">新たな挑戦は良いものですね</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">舞台で頭がいっぱいで…あ､次のLIVEだって忘れていませんよ</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">…夢で…みたから</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">あの…舞台に…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">ｾﾘﾌは全部覚えちゃいました♪</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">厳しい指導をしていただいたので､演技にも自信がつきました</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">プロデューサーさん､私のｾﾘﾌ聞いて頂けますか? 練習したくて…</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">この舞台…待ってたから…</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">プロデューサーさんの前にいるときは…自然体でいられます…</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">私には経験がないもので…愛を語るｼｰﾝは…うまくできなくて</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">あの､お芝居の練習を…ｾﾘﾌは覚えたのですが､でも…プロデューサーさん相手だとうまく言葉が出てきません…｡なぜでしょう…</div>');
        }

    } else if (getId == "i12" || getId == "p_i12") {
        if (getId == "i12") {
            document.getElementById("cardName").innerHTML = "[素顔のお嬢様]水本ゆかり]";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">ﾙｼｵｰﾈさん｡うふ､こちらです｡お疲れさまです｡LIVEﾘﾊも終わりましたし､あとは本番を待つのみ…こうして幕間に話すのは励みになります｡助言をもらうと…心まで潤う気がして…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ささいなお話が楽しくて…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">季節ごとに風の色も違いますね</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ふふ､はしたないかしら…?</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">上から見るプロデューサーさん…いつもよりかわいい…かも</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">聴いていてくださいました?</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">節感､出てればいいのですが</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">そろそろ移動しましょうか</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">休憩中も大勢のｽﾀｯﾌの方が働いてくれてます…｡感謝ですね…</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">プロデューサーさん､本番前に足がむくんでしまって…あ</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">秋風みたいに､ゆるやかに</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">プロデューサーさんの頭､なでなでしてもいいですか? うふふ♪</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">プロデューサーさんはﾌﾟﾛﾃﾞｭｰｻｰですのにﾏｯｻｰｼﾞお上手ですね</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">プロデューサーさんとの他愛ないやりとりが､いつしか大切な時間へ…｡季節は変わっても…この時だけは変わりませんように…</div>');
        } else {
            document.getElementById("cardName").innerHTML = "[素顔のお嬢様]水本ゆかり]+";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">ﾌﾙｰﾄの音色より透明な､澄んだ歌…｡プロデューサーさん､今の私なら歌える気がしませんか? どちらも人を感動させる音のはず…｡これが私の奏でるﾒﾛﾃﾞｨです｡聴いていてくださいね♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ささいなお話が楽しくて…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">季節ごとに風の色も違いますね</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">あら､遊歩道が色づいています</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">どこまでも清らかな心でいられたらと思います｡ｱｲﾄﾞﾙですから</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">聴いていてくださいました?</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">季節感､出てればいいのですが</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">心､癒せる存在になれたら…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">ﾌﾙｰﾄでは伝えられないことも､歌なら伝えられると信じて…</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">プロデューサーさんを信頼していますから｡ずっと､ですよ</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">皆さんの心に､届くように!</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">いつも熱心で純真なプロデューサーさんを､私､尊敬しています!</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">プロデューサーさんは名指揮者です｡いつまでも､ついていきます</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">私､気づいていました｡プロデューサーさんが守ってくださるから､私はこうしていられるって｡だから､この先もずっと…</div>');
        }
    } else if (getId == "i13" || getId == "p_i13") {
        if (getId == "i13") {
            document.getElementById("cardName").innerHTML = "[誠実なる花嫁]水本ゆかり";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">おつかれさまです､プロデューサーさん｡はい､事務所の床を掃除しています｡お仕事の花嫁修業で学んだことの復習をと思いまして…あ､今､お茶をお淹れしますから､少しお待ちくださいね</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">花嫁修業は楽しいです</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ｳｪﾃﾞｨﾝｸﾞﾄﾞﾚｽは憧れますね…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">家もﾌﾙｰﾄも､掃除は大事ですね</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">千枝ちゃんや早苗さんも…悪戦苦闘しているようですね｡</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">花嫁らしさ､十分でしょうか?</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">幸せなｼﾞｭｰﾝﾌﾞﾗｲﾄﾞのために…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">物事を習うのは楽しいですね</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">できない私を笑われるかと思いましたが､みなさん優しいです</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">プロデューサーさん､ﾈｸﾀｲ曲がってます…ここを…これでよし､と</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">ほっとする家庭のように…</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">プロデューサーさんのお部屋も､掃除に伺いましょうか? ふふっ</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">料理も少しできるようになりました｡何かお作りしましょうか?</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">両親とも､私が家事をする姿を見て驚いていました｡プロデューサーさんにお会いして､お礼が言いたいそうですよ</div>');
        } else {
            document.getElementById("cardName").innerHTML = "[誠実なる花嫁]水本ゆかり+";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">あの…私のｳｪﾃﾞｨﾝｸﾞﾄﾞﾚｽ姿､いかがでしょうか? ちゃんと花嫁らしく見えると良いのですが…｡プロデューサーさんに似合ってると言ってもらえるのが…一番うれしいです</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">花嫁修業は楽しいです</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ｳｪﾃﾞｨﾝｸﾞﾄﾞﾚｽは憧れますね…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">厳かな気持ちになります…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">私もいつか本物の花嫁としてｳｪﾃﾞｨﾝｸﾞﾄﾞﾚｽを着るんでしょうか</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">花嫁らしさ､十分でしょうか?</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">幸せなｼﾞｭｰﾝﾌﾞﾗｲﾄﾞのために…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">優雅に､大人っぽく…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">ｽﾃｰｼﾞ衣装のﾄﾞﾚｽとは､まったく違う着心地がします…</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">一緒にﾁｬﾍﾟﾙを歩いてみませんか､プロデューサーさん</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">あなたに祝福の音色を…</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">…私の横に立っていてくださいませんか? ほんの少しの間だけ</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">このまま､プロデューサーさんとﾊﾈﾑｰﾝに出発したい気分です｡</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">いつか本物の花嫁になる日…その時は､今よりもっと輝く私の姿を､プロデューサーさんに見ていただきたいですね…</div>');
        }
    }
    else if (getId == "i14" || getId == "p_i14") {
        if (getId == "i14") {
            document.getElementById("cardName").innerHTML = "[誠実なる花嫁･S]水本ゆかり";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">おつかれさまです､プロデューサーさん｡はい､事務所の床を掃除しています｡お仕事の花嫁修業で学んだことの復習をと思いまして…あ､今､お茶をお淹れしますから､少しお待ちくださいね</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">花嫁修業は楽しいです</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ｳｪﾃﾞｨﾝｸﾞﾄﾞﾚｽは憧れますね…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">家もﾌﾙｰﾄも､掃除は大事ですね</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">千枝ちゃんや早苗さんも…悪戦苦闘しているようですね｡</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">花嫁らしさ､十分でしょうか?</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">幸せなｼﾞｭｰﾝﾌﾞﾗｲﾄﾞのために…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">物事を習うのは楽しいですね</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">できない私を笑われるかと思いましたが､みなさん優しいです</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">プロデューサーさん､ﾈｸﾀｲ曲がってます…ここを…これでよし､と</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">ほっとする家庭のように…</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">プロデューサーさんのお部屋も､掃除に伺いましょうか? ふふっ</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">料理も少しできるようになりました｡何かお作りしましょうか?</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">両親とも､私が家事をする姿を見て驚いていました｡プロデューサーさんにお会いして､お礼が言いたいそうですよ</div>');
        } else {
            document.getElementById("cardName").innerHTML = "[誠実なる花嫁･S]水本ゆかり+";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">あの…私のｳｪﾃﾞｨﾝｸﾞﾄﾞﾚｽ姿､いかがでしょうか? ちゃんと花嫁らしく見えると良いのですが…｡プロデューサーさんに似合ってると言ってもらえるのが…一番うれしいです</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">花嫁修業は楽しいです</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ｳｪﾃﾞｨﾝｸﾞﾄﾞﾚｽは憧れますね…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">厳かな気持ちになります…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">私もいつか本物の花嫁としてｳｪﾃﾞｨﾝｸﾞﾄﾞﾚｽを着るんでしょうか</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">花嫁らしさ､十分でしょうか?</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">幸せなｼﾞｭｰﾝﾌﾞﾗｲﾄﾞのために…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">優雅に､大人っぽく…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">ｽﾃｰｼﾞ衣装のﾄﾞﾚｽとは､まったく違う着心地がします…</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">一緒にﾁｬﾍﾟﾙを歩いてみませんか､プロデューサーさん</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">あなたに祝福の音色を…</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">…私の横に立っていてくださいませんか? ほんの少しの間だけ</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">このまま､プロデューサーさんとﾊﾈﾑｰﾝに出発したい気分です｡</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">いつか本物の花嫁になる日…その時は､今よりもっと輝く私の姿を､プロデューサーさんに見ていただきたいですね…</div>');
        }
    } else if (getId == "i15" || getId == "p_i15") {
        if (getId == "i15") {
            document.getElementById("cardName").innerHTML = "[冬のﾊｰﾓﾆｰ]水本ゆかり";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">ふぅｰふぅｰ…ふふふっ､こうしていると…なんだか､心まで暖まってくる気がしますね｡こういう場には慣れていませんが､新鮮な体験に胸が躍ります｡それに…とっても美味しいです♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">寒さも…冬の魅力の一つです</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">これもまた､いい経験ですね…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">これは､天かすと言うのですか?</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ﾚｯｽﾝで疲れた体に…染み渡るようですね…｡芯から､暖まります</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">新鮮な気持ちで､臨めますね</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">楽しい時を､ご一緒しましょう</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">やさしい温もりを…届けますよ</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">胸にじんわりと沁みるような…そんな気がします｡大仰ですか?</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">今日の､この…おうどんの味は…決して忘れないでしょうね…</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">……暖かくて…ﾎｯとします</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">プロデューサーさん､寒くありませんか? もう少し､私の近くに…</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">また､忘れられない思い出ができましたよ｡プロデューサーさん…</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">あっという間に食べ終わってしまいました｡楽しい時間は短いですね…｡あのっ､またご一緒しましょうね､プロデューサーさん…</div>');
        } else {
            document.getElementById("cardName").innerHTML = "[冬のﾊｰﾓﾆｰ]水本ゆかり+";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">ﾄｰｸ番組は不慣れですが､準備はしっかりしてきましたよ｡ふふ…､私も､プロデューサーさんと出会ってから､色々な経験をしてきたんです｡話題には事欠きません｡それでは､行ってきますね…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">寒さも…冬の魅力の一つです</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">これもまた､いい経験ですね…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">この衣装は､ﾓﾌﾓﾌ…ですか?</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">みんなの個性を理解すれば､やるべき事はおのずと分かります</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">新鮮な気持ちで､臨めますね</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">楽しい時を､ご一緒しましょう</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">言葉は…楽器にも似ていますね</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">笑顔を見ると…胸が熱くなります｡まるで､いつかの夜のよう…/div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">この言葉で…プロデューサーさんの胸に届く､ﾒﾛﾃﾞｨｰを紡ぎます</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">冗談も…好きですから♪</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">ﾄｰｸは不慣れですが､プロデューサーさんの期待は裏切りませんよ</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">暖かい話題には事欠きませんよ｡プロデューサーさんのおかげで</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">番組は終わりましたけど…まだ話し足りません｡だから､プロデューサーさん｡少し…お話ししませんか? できれば､あの屋台で…</div>');
        }

    }
    else if (getId == "i16" || getId == "p_i16") {
        if (getId == "i16") {
            document.getElementById("cardName").innerHTML = "[ｴﾌｫｰﾄﾌﾞﾘﾗﾝﾃ]水本ゆかり";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">んっ…ふぅ､ふぅ…｡少し､休憩を…｡あら､いつの間に私､こんなに進めていたんですね｡ﾊﾞﾀ足と､プロデューサーさんのお顔を見ることに夢中で､気づきませんでした｡お恥ずかしいです♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">お外での運動は清々しいですね</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ああ､いい天気…気持ちいい…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">今日はﾌﾟｰﾙを楽しみましょう♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">お水に浮くのは好きなんです｡ただ､泳ぐのは上手でなくて…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">今は､ここが私のｽﾃｰｼﾞですから</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">昔より､体力がつきました♪</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">速さよりも､堅実なﾌｫｰﾑを…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">泳ぐ姿が綺麗だと､素敵ですよね…私も､そうなりたいです</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">水本ですから､お水は得意なんです｡…わ､笑ってください～!</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">足を動かして…前へ!</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">ﾋﾞｰﾄ板があると､プロデューサーさんを見失いません｡無くても…</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">プロデューサーさんが優しく導いてくれるから…私は泳げます</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">やはりプロデューサーさんがいてくださると､上達が早いです｡いつかは､私にあなたの手を引かせてください｡足､ﾊﾞﾀﾊﾞﾀって♪</div>');
        } else {
            document.getElementById("cardName").innerHTML = "[ｴﾌｫｰﾄﾌﾞﾘﾗﾝﾃ]水本ゆかり+";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">玉を握り､心静かに集中して…えいっ! あっ､おぁ､惜しい…｡いけない､まだ試合中でしたね! ﾘｽﾞﾑに乗って､どんどん投げますよ｡えいっ…えいっ…楽しいですね､えいっ! うふふっ♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">お外での運動は清々しいですね</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ああ､いい天気…気持ちいい…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">準備運動､きちんとしないと…</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">私だって､運動が苦手ではないところ､みせますからっ｡えいっ</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">今は､ここが私のｽﾃｰｼﾞですから</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">昔より､体力がつきました♪</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">ええと､入った数はこれで…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">ｺﾂがつかめました! この勝負､私たちがいただきますよ♪</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">プロデューサーさん､教えていただけますか? 優しく握って…?</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">今日は楽しい運動会です♪</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">お弁当は､ｼｰﾄを敷いて一緒に食べましょう｡運動会ですものね</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">プロデューサーさんに教わった通りに優しく…えいっ♪うふふ♪</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">小学生の頃の運動会は…家族の声援が嬉しかったです｡プロデューサーさんの声援は､それと同じ温かさに満ちています…ふふっ</div>');
        }

    }
    else if (getId == "i17" || getId == "p_i17") {
        if (getId == "i17") {
            document.getElementById("cardName").innerHTML = "[華やぎのﾋﾞﾌﾞﾗｰﾄ水本ゆかり";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">プロデューサーさん､見てください｡楽しい音色が溢れてきそうなﾏｸﾞｶｯﾌﾟです♪他にも､素敵な雑貨がたくさん…どれを贈ったら喜ばれるかしら? 眺めているだけで音が聴こえてきそうですね</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">心のﾒﾛﾃﾞｨｰを､形にします…♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">音は人と人を繋ぐ､絆ですから</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">あの子はどれが好みかしら…♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">私がﾃﾞｻﾞｲﾝするなら…やはり､ﾌﾙｰﾄﾓﾁｰﾌにしたいですね♪</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">伝えたい､音楽の素晴らしさ…!</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">想いをのせて…贈りましょう♪</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">買い過ぎないようにしなきゃ…</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">雑貨屋さんに入ると､みなさんへ贈り物をしたくなりますね♪</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">プロデューサーさんに甘えて…ゆっくり選ばせてもらいますね♪</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">楽しいﾒﾛﾃﾞｨｰを贈ります♪</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">私の欲しいもの…? ふふっ､プロデューサーさんは優しいですね</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">好きな物に囲まれて､隣にはプロデューサーさん…私､幸せ者です</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">大切な人たちへの気持ちを…手に取れる形で､渡したいのです｡もちろん､プロデューサーさんへも……心を込めて､贈り物を♪</div>');
        } else {
            document.getElementById("cardName").innerHTML = "[華やぎのﾋﾞﾌﾞﾗｰﾄ水本ゆかり+";
            $(".commentIn *").remove();
            $("#fst_cmi_fst").append('<div class="comment_comment">美しい旋律､重厚なﾊｰﾓﾆｰ…開かれた扉に､胸が激しく高鳴ります｡そう…新たな音色に染まった私を､お魅せしましょう! 目を離すことは許されません…力強く甘美な音楽が､鳴り止むまで!</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">心のﾒﾛﾃﾞｨｰを､形にします…♪</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">音は人と人を繋ぐ､絆ですから</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">新しい私の､お披露目ですね!</div>');
            $("#fst_cmi_scd").append('<div class="comment_comment">ｽﾄﾘﾝｸﾞｽとﾄﾞﾗﾑの音色が絶妙に絡み合って…心に深く､響きます</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">伝えたい､音楽の素晴らしさ…!</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">想いをのせて…贈りましょう♪</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">激しいﾀﾞﾝｽも､任せてください!</div>');
            $("#scd_cmi_fst").append('<div class="comment_comment">そう､目を逸らさずに…ｶﾒﾗの向こうまで､熱い想いを届けます!</div>');
            $("#scd_cmi_scd").append('<div class="comment_comment">艶やかに舞い踊る姿…プロデューサーさんに刻み込んでみせます</div>');
            $("#scd_cmi_trd").append('<div class="comment_comment">聴いて､観て､感じて…!</div>');
            $("#trd_cmi_fst").append('<div class="comment_comment">不安はありません｡プロデューサーさんが､導いてくれますから…</div>');
            $("#trd_cmi_scd").append('<div class="comment_comment">今だけは…プロデューサーさんは私の虜｡離しはしませんよ…♪</div>');
            $("#trd_cmi_trd").append('<div class="comment_comment">新しい音､新しい色､新しい世界…プロデューサーさんが次に導くのは､どんな私でしょうか｡どんな私でも､お見せします……!</div>');
        }
    }
    var offset = $("#mainImg").offset();
    $("html,body").animate({ scrollTop: offset.top }, 400);
}