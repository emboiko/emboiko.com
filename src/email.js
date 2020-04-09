const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const welcomeEmail = (email, name) => {
    sgMail.send({
        to:email,
        from:"Ed@emboiko.com",
        subject:"Welcome! Thanks for joining.",
        text:`Welcome to the roster, ${name}. Let me know how you get along!`
    });
}

const cancelEmail = (email, name) => {
    sgMail.send({
        to:email,
        from:"Ed@emboiko.com",
        subject:"Sorry to see you go!",
        text:`Goodbye, ${name}. We hope to see you back sometime soon!`
    });
}

const messageEmail = (email, name, message) => {
    sgMail.send({
        to:"Ed@emboiko.com",
        from:email,
        subject:`Site Message from ${name}`,
        text:message
    });
}

module.exports = {
    welcomeEmail,
    cancelEmail,
    messageEmail
}
