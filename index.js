import nodemailer from "nodemailer";

nodemailer.createTransport({
    host:"smtp.hostinger.com",
    port:"465",
    secure:true,
    auth:
    {
        type:"Login",
        user:Bun.env.EMAIL,
        pass:Bun.env.PASSWORD
    }
}).sendMail({
    from:"atendimento@vnici.digital",
    to:"vnicidigital@gmail.com",
    subject: "Testando SMTP nodemailer",
    html:"<h2>Teste funcionando com sucesso!</h2>"
}).then(response => console.log("Está funcionando", response))
.catch(error => console.log("Não está funcionando", error))