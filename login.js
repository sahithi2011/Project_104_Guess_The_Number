function Login()
{
    player_name = document.getElementById("playername").value;
    localStorage.setItem("playerName", player_name);

    window.location = "gamepage.html";
}
