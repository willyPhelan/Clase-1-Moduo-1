const _0x3ef6=['status','statusText','log','FTM1\x20-\x2000-IntroToCS','git\x20config\x20--get\x20remote.origin.url','post','git\x20commit\x20-m\x20\x22CP\x20commiteado\x20por\x20','message','/tests/result.json','application/json','RESULTADO:\x20','.\x20\x0a','readFileSync','Ejecutando\x20tests...\x0a','prompt-sync','git\x20add\x20.','trim','numPassedTests','https://proxy.soyhenry.com:3000/submit','exit','Submit\x20OK\x0a','Falló\x20el\x20submit\x0a','error:\x20','stderr:\x20','npm\x20run\x20grade','git\x20push\x20https://','error','Usuario\x20de\x20github:','then','pop','\x20master','split','parse','catch','stringify','Estas\x20seguro\x20que\x20deseas\x20submitear\x20este\x20resultado?\x20(S/n)\x20','toLowerCase'];(function(_0x2d1713,_0x3ef6a1){const _0x4f3acf=function(_0x3d4e96){while(--_0x3d4e96){_0x2d1713['push'](_0x2d1713['shift']());}};_0x4f3acf(++_0x3ef6a1);}(_0x3ef6,0x1e3));const _0x4f3a=function(_0x2d1713,_0x3ef6a1){_0x2d1713=_0x2d1713-0x0;let _0x4f3acf=_0x3ef6[_0x2d1713];return _0x4f3acf;};const _0x195638=_0x4f3a,{exec}=require('child_process'),fetch=require('node-fetch');var prompt=require(_0x195638('0xc'))();const fs=require('fs');function ejecutar(_0x3d4e96){return new Promise((_0x49984e,_0x24effe)=>{exec(_0x3d4e96,(_0x24f256,_0x102ae2,_0x39dc44)=>{const _0x2947fc=_0x4f3a;if(_0x24f256)return _0x24effe(_0x2947fc('0x14')+_0x24f256[_0x2947fc('0x5')]);if(_0x39dc44)return _0x49984e(_0x2947fc('0x15')+_0x39dc44);_0x49984e(_0x102ae2);});});}const resultFile=__dirname+_0x195638('0x6');try{fs['unlinkSync'](resultFile);}catch(_0x518265){console[_0x195638('0x18')](_0x518265);}console[_0x195638('0x0')](_0x195638('0xb')),exec(_0x195638('0x16'),async(_0xa79715,_0x1b71c8,_0x57016c)=>{const _0x3c3364=_0x195638;let _0xffd85a=fs[_0x3c3364('0xa')](resultFile),_0x380ec6=JSON[_0x3c3364('0x1e')](_0xffd85a);const _0x41af15=_0x380ec6[_0x3c3364('0xf')],_0x59b416=_0x380ec6['numTotalTests'];console[_0x3c3364('0x0')](_0x3c3364('0x8')+_0x41af15+'\x20de\x20'+_0x59b416+_0x3c3364('0x9'));const _0x3afa37=prompt(_0x3c3364('0x21'))[_0x3c3364('0x22')]();if(_0x3afa37!=='s')return process[_0x3c3364('0x11')](0x0);const _0x144a1b=prompt(_0x3c3364('0x19'))['toLowerCase'](),_0x4e663e=prompt['hide']('Password:');let _0xa7c3f8;try{const _0x2a37a0=await ejecutar(_0x3c3364('0x2'));_0xa7c3f8=_0x2a37a0[_0x3c3364('0xe')]()[_0x3c3364('0x1d')]('/')[_0x3c3364('0x1b')](),await ejecutar(_0x3c3364('0xd')),await ejecutar(_0x3c3364('0x4')+_0x144a1b+'\x20a\x20las\x20'+Date['now']()+'\x22'),await ejecutar(_0x3c3364('0x17')+_0x144a1b+':'+_0x4e663e+'@github.com/'+_0x144a1b+'/'+_0xa7c3f8+_0x3c3364('0x1c'));}catch(_0x52f52e){return console['error'](_0x52f52e),process[_0x3c3364('0x11')](0x0);}fetch(_0x3c3364('0x10'),{'method':_0x3c3364('0x3'),'headers':{'Content-Type':_0x3c3364('0x7')},'body':JSON[_0x3c3364('0x20')]({'github':_0x144a1b,'passed':_0x41af15,'total':_0x59b416,'repo':_0x3c3364('0x1')})})[_0x3c3364('0x1a')](function(_0x31062c){const _0x3d4e11=_0x3c3364;if(_0x31062c[_0x3d4e11('0x23')]!==0xc8)throw new Error(_0x31062c[_0x3d4e11('0x24')]);return console['log'](_0x3d4e11('0x12')),process[_0x3d4e11('0x11')](0x0);})[_0x3c3364('0x1f')](function(_0x2a5393){const _0x5584fb=_0x3c3364;return console['error'](_0x2a5393),console[_0x5584fb('0x0')](_0x5584fb('0x13')),process[_0x5584fb('0x11')](0x1);});});
