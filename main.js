async function postBin() {
  const eAddress = document.querySelector("#email").value;
  const emailJson = { email: eAddress };
  console.log(emailJson);
  const result = await (
    await fetch("https://api.jsonbin.io/b", {
      headers: {
        "secret-key":
          "$2b$10$jt5bErgSu8a4pGbJ1MQUQO6KntsZVtsyNMCuFlA3ihCpdLVjhtG9m",
        "collection-id": "600edec9bca934583e417898",
        name: "NitzanTest",
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(emailJson),
    })
  ).text();

  console.log(result);
}

const sendButton = document.querySelector("#submit");
sendButton.addEventListener("click", postBin);
