/** @type {import('next').NextConfig} */
const nextConfig = {
    /*    basePath:"/ostad/designAgency",
        poweredByHeader:false,
        httpAgentOptions:{
            keepAlive:true,
            timeout:60000,
        },

     async headers(){
            return [
                {source:"/:path*",
                  headers: [{key:"X-Frame-Option",value:"SAMEORIGIN"}]}
            ]

     }, 
     async headers(){
        return [
            {source:"/:path*",
              headers: [{key:"Content-Security-Policy",value:"default-src'self';script-src'self'"
            
            }]}
        ]

 },  

 async headers(){
    return [
        {source:"/:path*",
          headers: [{key:"Permission-Policy",value:"camera=();battery=();microphone=();geolocation=()"}]}
    ]

},

async headers(){
    return [
        {source:"/:path*",
          headers: [{key:"Strict-Transport-Security",value:"max-age=63072000; includeSubDomains;preload"}]}
    ]

},

async headers(){
    return [
        {source:"/:path*",
          headers: [{key:"X-Content-Type",value:"nosniff"}]}
    ]

}, */



}; 

export default nextConfig;
