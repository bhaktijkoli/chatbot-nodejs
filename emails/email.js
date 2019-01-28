const Email = require('email-templates');
const path = require('path');

const email = new Email({
  message: {
    from: process.env.MAIL_FROM
  },
  transport: {
    jsonTransport: true
  },
  views: {
    options: {
      extension: 'handlebars'
    }
  }
});

const defaultLocals = {
  host: process.env.SERVER_HOST,
}

module.exports.send = (to, template, locals) => {
  locals.default = defaultLocals;
  email
  .send({
    template: path.join(__dirname, 'templates', template),
    message: {
      to: to
    },
    locals: locals,
  })
  .catch(console.error);
}
