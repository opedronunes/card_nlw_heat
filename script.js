const linksSocialMedia = {
  github: 'Pedronunes - Dev',
  youtube: 'chanel/',
  instagram: 'pedruhnunes',
  facebook: 'maykbrito',
  twitter: 'janelinytec'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()