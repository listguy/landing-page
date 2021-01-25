(async function getBins() {
  const binId = await (
    await fetch(
      "https://api.jsonbin.io/e/collection/600edec9bca934583e417898/all-bins",
      {
        headers: {
          "secret-key":
            "$2b$10$jt5bErgSu8a4pGbJ1MQUQO6KntsZVtsyNMCuFlA3ihCpdLVjhtG9m",
        },
      }
    )
  ).json();
  console.log(binId);
})();
