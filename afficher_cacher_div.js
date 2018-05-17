function afficher_cacher(id)
{
  var texte = document.getElementById(id)
  var bouton = document.getElementById('bouton')
    if(texte.style.visibility=="hidden")
    {
        texte.style.visibility="visible";
        bouton.innerHTML='Coordonnées';
    }
    else
    {
        texte.style.visibility="hidden";
        bouton.innerHTML='Coordonnées';
    }
    return true;
}

/* function afficher_cacher(id)
{
    if(document.getElementById(id).style.visibility=="hidden")
    {
        document.getElementById(id).style.visibility="visible";
        document.getElementById('bouton').innerHTML='Cacher le texte';
    }
    else
    {
        document.getElementById(id).style.visibility="hidden";
        document.getElementById('bouton').innerHTML='Afficher le texte';
    }
    return true;
}
*/
