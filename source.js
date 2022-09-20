async function findData() {
    const response = await fetch("https://api.hive-engine.com/rpc/contracts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "find",
        params: {
          contract: "tokens",
          table: "balances",
          query: {"symbol":"BUDS", 'balance': { '$ne' : "0" }},
        },
        id: 1,
      }),
    });
    const responseJson = await response.json();
    const data = responseJson.result
    console.log(data);

    const tableBody = document.getElementById("tablebody");
    for (i = 0; i < 20; i++) {
      const row = document.createElement("tr"); //creates a row
      const user = document.createElement("td"); //creates a cell inside the row
      const balance = document.createElement("td"); //creates a cell
      user.textContent = data[i].account;
      balance.textContent = data[i].balance;
      row.append(user);
      row.append(balance);
      tableBody.append(row);
    }
  }
  
  findData()