const development = {
    name: 'development',
    asset_path: './assets',
    session_cookie_key: 'blahsomething',
    db: 'codeial_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'amanmi99900@gmail.com',
            pass: 'udya elsv plzm nfrs'
        }
    },

    google_clientID: "944600475035-4m8lqgbp7q2jvm7d7l5jn4ckgbdi261j.apps.googleusercontent.com",
    google_clientSecret: "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",
    google_callbackURL: "http://localhost:8000/users/auth/google/callback",
    jwt_secret :'codeial'


}






// const production = {


//     name: 'production',
//     asset_path:  process.env.co,
//     session_cookie_key: 'blahsomething',
//     db: 'codeial_development',
//     smtp: {
//         service: 'gmail',
//         host: 'smtp.gmail.com',
//         port: 587,
//         secure: false,
//         auth: {
//             user: 'amanmi99900@gmail.com',
//             pass: 'udya elsv plzm nfrs'
//         }
//     },

//     google_clientID: "944600475035-4m8lqgbp7q2jvm7d7l5jn4ckgbdi261j.apps.googleusercontent.com",
//     google_clientSecret: "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",
//     google_callbackURL: "http://localhost:8000/users/auth/google/callback",
//     jwt_secret :'codeial'


// }


module.exports = development;