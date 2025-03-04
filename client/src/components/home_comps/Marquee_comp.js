import React from 'react'
import '../styling/marquee.css'

function Marquee_comp() {
  return (
    <div className='marquee-section'>
        <div id='title' style={{display: "flex", justifyContent: "center", fontSize:'40px'}}>Our partners</div>
        <marquee direction="left" width="100%" height="150px" scrollamount='20' className='partners'>
            <img className='marquee-elem' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.1min30.com%2Fwp-content%2Fuploads%2F2018%2F11%2FValeo-Logo.png&f=1&nofb=1&ipt=4d692c6d91b0bc0ac72ccca78c5382313ea3c7c8f1d4ac892f72dacaf2083669&ipo=images'/>
            <img className='marquee-elem' style={{width:"250px", height:"150px"}} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5b%2Fcb%2F02%2F5bcb022f0c354fdbb607c70f83a2de44.png&f=1&nofb=1&ipt=fd79c41283877eadb20982311a38361f65d40c64fe569825e99fb84729098f42&ipo=images'/>
            <img className='marquee-elem' style={{width:"350px", height:'90px'}} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F02%2FCastrol_logo_3D_transparent.png&f=1&nofb=1&ipt=8cff988dbda96e2f3c76d69c66577b97deacd7e2474a434c1394ba842f17d3a6&ipo=images'/>
            <img className='marquee-elem' style={{width:'250px', height:'110px'}} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F11%2FShell-Logo-1971-1995.png&f=1&nofb=1&ipt=28b72a64abc9eaf4c4ccae5ca02eb9097d9d211b39dad511a984a0c4c9e1a0ee&ipo=images'/>
            <img className='marquee-elem' style={{width:'400px'}} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.drivparts.com%2Fcontent%2Floc-na%2Floc-us%2Ffmmp-corporate%2Fen_US%2Fbrands%2Fmonroe%2F_jcr_content%2Fbrand-navigation.img.png%2F1651846285053.png&f=1&nofb=1&ipt=a2c5f9249b5bf6c17cfdc337ea65d76fb19dca7f964c601ad8d803bc2ebd72f5&ipo=images'/>
            <img className='marquee-elem' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandslogos.com%2Fwp-content%2Fuploads%2Fimages%2Flarge%2Fngk-logo-1.png&f=1&nofb=1&ipt=dce9aec144a8824b29f5f05de565562aa82b20854b770e3c71c90cf6183c2862&ipo=images'/>
            <img className='marquee-elem' style={{width:'500px'}} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F03%2FBosch-logo.png&f=1&nofb=1&ipt=cee1d288d841c8e260d55600a5a118261806021c42dde0d8da72dcbeef1b9c99&ipo=images'/>
            <img className='marquee-elem' style={{width:'500px', height:'200px'}} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F09%2FMichelin-Symbol.png&f=1&nofb=1&ipt=20fad471eadf314b9d9f2eae0a8b0ab3a0cfb42668f60909e7e0553d21bba264&ipo=images'/>
            <img className='marquee-elem' style={{width:'500px', height:'80px'}} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmytommis.com%2Fwp-content%2Fuploads%2F2020%2F05%2FVarta-Logo.svg.png&f=1&nofb=1&ipt=2f3f3f5f86ba4286b2d4797a43d380b2f3d1f7b70df3e3bdfd921d9f1e7586a5&ipo=images'/>
            <img className='marquee-elem' style={{width:'500px', height:'80px'}} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.logolynx.com%2Fimages%2Flogolynx%2F5f%2F5fbadff249638afeedfae2de09fe572b.png&f=1&nofb=1&ipt=d6ed7a6af71c8d93719c375730a4efbe0ed5aaa18e11462ab690baebac95d780&ipo=images'/>
            <img className='marquee-elem' style={{width:'220px', height:'180px'}} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flezebre.lu%2Fimages%2Fdetailed%2F17%2F30391-ZF.png&f=1&nofb=1&ipt=94c2b7986e34828bd5efc23b0c813fb9bfc1800dafb3a2e551afe904f1260c85&ipo=images'/>
        </marquee>
    </div>
  )
}

export default Marquee_comp