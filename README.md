# CSRF_attack
The purpose of this repo is to understand and learn about the ***cross-site request forgery*** vulnerability that a basic server might face. For that, I have programmed 2 basic servers in nodejs using express, handlebars and mysql.
## Structure
* **attacker_server**: this would be programmed and spreded massively via email by an hypothetical cracker.
* **target_server**: this would be the target server that the cracker wants to attack.
## Cross-site request forgery
This vulnerability consists on taking advantage of the session of the target-server's trusted user in the web-browser. When the victim clicks on the link of the attacker-server (typically shared by email), it appeares to happend nothing. But a script runs behind, making a petition from the attacker-server to the target one with the session-id of the trusted user. Likewise, from the point of view of the target-server, it is the trusted user who is making the HTTP petitions, not the cracker.\*more info: https://en.wikipedia.org/wiki/Cross-site_request_forgery

![](docs/csrf.png)

In this lab, the purpose of the attacker is to change the registered email of the trusted user in the target-server
