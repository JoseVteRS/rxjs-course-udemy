import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const text = document.createElement("div");
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac ipsum quis diam rutrum suscipit eu et nunc. In hac habitasse platea dictumst. Phasellus finibus diam lectus, sit amet volutpat lectus posuere et. Donec tristique tellus vel dui convallis, sed vulputate velit fermentum. Nulla facilisi. Fusce quam risus, sollicitudin sit amet congue ut, placerat sit amet massa. Pellentesque ut commodo ex. Proin tempor ipsum nibh, sed egestas quam dapibus in. Nulla scelerisque a nisi ut porta. Sed laoreet orci et lorem consequat, eu cursus nulla pellentesque. Donec mattis laoreet enim, id dapibus nisi ornare lacinia. Maecenas quis nulla magna. In consequat suscipit rutrum. Mauris ultrices a neque id semper. Aenean libero felis, maximus sit amet mattis ac, porta ac massa.
<br /><br />
Aliquam accumsan dui quam, eget posuere leo gravida nec. Nullam vel mauris sem. Aliquam congue nisl eget ex venenatis, at porttitor ligula ultrices. Cras vestibulum ultrices erat sit amet placerat. In sodales luctus justo ac blandit. Fusce dolor metus, maximus vitae accumsan nec, blandit a leo. Integer sit amet dapibus elit. Morbi tristique, dui sed fringilla dignissim, nulla velit feugiat magna, tristique mattis nisl odio sed tellus. Etiam gravida turpis at placerat accumsan. Sed lobortis odio lorem, et malesuada nisi fermentum sit amet. Suspendisse blandit elit quis pharetra varius. Aenean interdum vehicula tortor, eu iaculis ipsum. Suspendisse lectus dolor, tempor ac ex eu, cursus iaculis nisl.
<br /><br />
Cras aliquet aliquet leo nec vestibulum. Suspendisse posuere convallis lorem vitae cursus. Aenean vestibulum finibus quam, nec eleifend nisi mollis ac. Donec nec pharetra est, ac placerat sapien. Curabitur maximus ante elit, a dapibus nisl pretium ut. Nullam consequat lectus turpis, a tristique sem suscipit eu. Praesent eget lorem et dolor pharetra scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed nisi consectetur, aliquet turpis sit amet, viverra leo. Aenean eu vestibulum est, quis efficitur nibh. Nunc ultrices justo eget nulla pulvinar, ac convallis nisl ullamcorper.
<br /><br />
Pellentesque viverra turpis ut ex gravida eleifend. Duis dignissim nunc in quam maximus, et feugiat lectus scelerisque. Nullam non ultricies dui, in viverra nibh. Pellentesque tempus tellus velit. Donec vel porttitor justo, blandit luctus eros. Vestibulum ultrices vestibulum quam in ultricies. Sed consequat dui ex, quis rhoncus mi porttitor viverra.
<br /><br />
Fusce mauris metus, maximus at egestas et, fermentum id risus. Curabitur dolor libero, ultricies vitae dolor in, hendrerit rutrum nisi. Sed nisl metus, congue at eros a, porttitor bibendum diam. Donec vulputate elit enim, quis porttitor risus facilisis in. Praesent scelerisque finibus dolor, eu gravida ex aliquam tempor. Nullam nec massa condimentum, tempus quam nec, ornare sem. Nunc quis lacinia sem. Pellentesque condimentum nisi feugiat, luctus diam ut, viverra libero. Proin sapien leo, auctor a mattis sed, auctor ac diam. Ut tristique diam in dolor ultrices faucibus. Sed et accumsan est, vulputate pharetra nisi. Pellentesque ut orci tempor, tincidunt tellus quis, luctus ipsum. Fusce vehicula malesuada tempus. Ut id ante suscipit, dapibus odio sed, facilisis nisi. Phasellus elementum mattis porttitor.
<br /><br />
Aenean vitae enim sit amet enim semper pretium. Etiam vestibulum sit amet diam vel rhoncus. Vestibulum sed nisl accumsan, vehicula lectus vel, venenatis lorem. Duis aliquam orci tincidunt tristique dictum. Mauris viverra leo sit amet nulla aliquam, vel luctus nisi bibendum. Quisque malesuada libero non iaculis mattis. Maecenas pharetra vehicula lacus ut aliquet. Nam ornare ante a euismod tristique. Phasellus venenatis maximus nunc, a iaculis lacus semper sed. Suspendisse eu mauris rutrum, ultrices neque sit amet, molestie urna. Sed volutpat nisi in risus euismod mattis. Mauris lobortis auctor diam, commodo tincidunt sem pulvinar vitae. Nunc eu tristique eros.
<br /><br />
In et mi lobortis, sodales lorem quis, tristique leo. Vivamus rutrum nunc non mattis fermentum. Nullam semper sapien et lacinia posuere. Maecenas ultricies porta ipsum, ut sagittis lectus egestas a. Cras volutpat risus ut odio dignissim, sit amet luctus ligula faucibus. Pellentesque gravida et magna vehicula sollicitudin. Nulla viverra sit amet tellus eu dapibus. Suspendisse egestas cursus nunc, eget malesuada orci congue nec. Proin congue, justo scelerisque sagittis cursus, ante tortor vestibulum ligula, eu vulputate mauris dui mattis massa. Nullam feugiat suscipit sem. Pellentesque vitae aliquet nisl. Sed quis elit orci. Cras mattis sollicitudin tellus sit amet viverra. Praesent a dapibus purus. Sed vel condimentum velit.
<br /><br />
Vestibulum cursus egestas mi, a hendrerit eros sodales a. Suspendisse potenti. Suspendisse enim quam, varius eget tortor at, ultrices venenatis lectus. Mauris viverra neque et augue congue, quis euismod quam vestibulum. Donec condimentum augue quis eros dictum gravida. Donec ante nisi, tristique id tempus eu, vestibulum ut odio. Nunc eleifend imperdiet est, eu lobortis urna lacinia a. Curabitur sed ornare felis, eget auctor dolor. Vivamus dictum nisi non ex ullamcorper, eget tristique ligula ullamcorper. Praesent scelerisque odio ut iaculis rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam convallis tortor justo. Etiam interdum ut lectus ut lobortis. Aliquam facilisis leo orci, ac lacinia est tristique fermentum.
<br /><br />
Phasellus porttitor dapibus odio in cursus. Vestibulum non quam nec sem tempor gravida ultricies at sapien. Donec maximus sed purus ultrices luctus. Praesent libero odio, dapibus non mollis rhoncus, blandit id turpis. Sed at porttitor urna. In hac habitasse platea dictumst. Donec a facilisis nibh. Mauris molestie tellus ac dolor ornare facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque finibus, est rutrum accumsan suscipit, magna ligula maximus mi, feugiat tincidunt lectus urna a leo. Praesent congue lobortis ex scelerisque imperdiet. Vivamus eu lacinia ex, porta gravida sem.
<br /><br />
Aliquam volutpat, enim in mollis vehicula, orci ex congue justo, at rhoncus sem arcu non magna. Ut placerat, leo at lacinia imperdiet, nisl arcu consectetur mauris, id finibus tortor nulla ac metus. Integer consequat mattis risus, at malesuada est ultrices non. Donec iaculis cursus erat, a sagittis mauris consectetur id. Aliquam consectetur arcu vel risus sagittis, sed venenatis justo porttitor. Maecenas in faucibus ante. Morbi vitae ipsum diam. Aliquam vulputate enim eu odio faucibus, et eleifend libero posuere. Phasellus maximus porta arcu, ut sagittis tellus suscipit quis. Vestibulum mattis ac sem id imperdiet. Curabitur ex lectus, placerat non suscipit in, auctor quis magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ultrices elit libero, nec ullamcorper sem finibus varius. Integer ut lorem porttitor, lobortis risus sit amet, tempor eros.
<br /><br />
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sit amet tempor mi. Morbi eleifend augue nec orci pretium mollis. Curabitur at lacinia arcu. Fusce rutrum tortor posuere, tincidunt sapien vitae, tempus ex. In libero felis, scelerisque vitae volutpat eget, placerat et velit. Nullam sit amet ultricies dui. Donec congue, tellus vel efficitur laoreet, purus ligula fringilla augue, in lobortis orci neque in orci. Vestibulum ullamcorper, metus at mollis blandit, dui mi mollis sapien, eget semper felis lectus pellentesque tortor.
<br /><br />
Duis sagittis sem vehicula varius imperdiet. Donec ac lorem ultricies nisi egestas gravida sit amet nec turpis. Cras porta purus eu ipsum commodo, non bibendum mauris fermentum. Pellentesque eget libero sed sapien aliquet auctor sit amet quis dui. Donec vitae imperdiet libero. Cras fermentum euismod mauris, eget consectetur ex viverra sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent volutpat finibus mi sit amet condimentum.
<br /><br />
Praesent sapien velit, scelerisque ac dui consectetur, consectetur sollicitudin tortor. Suspendisse vehicula, odio non hendrerit accumsan, felis diam interdum sapien, sed consectetur felis odio ornare nisi. Etiam euismod fringilla tortor vel aliquet. Nam ac mauris a odio tempor tempus. Aliquam libero enim, pharetra a eros a, fringilla tincidunt sem. Nullam euismod ipsum sit amet mi volutpat, id condimentum ligula accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam nec lacus et massa pellentesque congue in non odio. Etiam ut nulla sodales, aliquet neque eget, tincidunt massa.
<br /><br />
Donec lacinia sagittis turpis. Phasellus consequat velit ac eros euismod ultricies. Nulla imperdiet, felis id interdum fermentum, risus odio lobortis purus, id venenatis ipsum sem non lacus. Aliquam sit amet ultricies leo, ac ornare neque. Praesent id augue ac lectus sodales consectetur nec non neque. Morbi lobortis egestas quam sit amet ornare. Nullam convallis neque eu urna posuere, nec porttitor nibh dignissim. Nunc pharetra tincidunt orci. Morbi mollis diam vel nunc congue finibus. Sed ultricies tellus non porttitor gravida. Morbi ultricies nibh et augue dictum, et hendrerit magna pretium. Praesent fringilla sapien interdum pellentesque ornare.
<br /><br />
Integer eget leo vitae felis varius semper nec vitae elit. Mauris condimentum nunc cursus orci dignissim, sit amet viverra mauris dictum. Maecenas porta magna auctor cursus dictum. Nunc finibus arcu facilisis, finibus lorem eget, ultricies augue. Praesent facilisis ac libero sed sollicitudin. Vestibulum nulla leo, blandit sed ultricies vitae, auctor vel purus. Aenean vitae erat eu est vestibulum molestie non nec neque.
`;

const body = document.querySelector("body");
body?.append(text);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");

body?.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, "scroll");

const progress = scroll$.pipe(
    map((event) => calcularPorcentajeScroll(event)),
    tap((x) => console.log(x))
);

progress.subscribe((porcetaje) => {
    progressBar.style.width = `${porcetaje}%`;
});
