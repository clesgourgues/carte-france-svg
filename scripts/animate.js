const dordogneContent =
  '<ul><li>Vin rosé la cave d’Augustin 5€</li><li>Florent rillettes de canard Riberac 6€ </li><li>Terrine de campagne Riberac 7€ </li><li>Cuisses de canard confites 6</li><li>Riberac et Adrien Delbos palais chocolat et orange 2€ </li><li>Biscusit Billeau biscottes artisanales 2€</li><li>La chanteracoise le croquant de jacou aux noix 3€ </li><li>Biscuits bio toast aux figues 2€ </li><li>La chanteracoise croutons spécial soupe la chanteracoise 1,50€</li></ul>';

const girondeContent =
  '<ul><li>Vin blanc « cabane du pyla » 6€</li><li>Vin rosé « cabane du pyla » 6€ </li><li>Limonade du mascaret 3€ </li><li>Huîtres du bassin d’arcachon 12€ </li><li>Farine artisanale du moulin 4€ </li><li>Dubern pâté lou gascoun 5€</li><li>Vin rosé Peychaud 6€</li><li>Vin rouge Peychaud 6€ </li><li>Sauternes Myrat 25€ </li><li>Coffret le comptoir de Mathilde 5€ </li><li> Cacolac 2€</li></ul>';

const landesContent =
  '<ul><li>Miel des Landes 12€ </li><li>Fromage : le Saint Nectaire 5€ </li><li>Fromage : le Saint Denis 5€</li> <li>Vin blanc “cave du Marmandais” 6€ </li><li>Vin rouge “cave du Marmandais” 6€ </li><li>Pastis landais 14€</li></ul>';

const gersContent =
  '<ul><li>Magnum Intemporal Château de Laubade 120€</li><li>Fromage de brebis de monsieur Cazette 5€</li></ul>';
let contentNode;
let contentUrl;

$(document).ready(function() {
  $('.animated').mouseenter(function() {
    contentNode = '';
    $('#products-content').empty();
    $('.departement').empty();
    var $departement = $(this);
    var nom = $departement.data('nom');
    $('.departement').text(nom);
    var content = $('#products-content');
    if (nom === 'Dordogne') {
      contentNode = dordogneContent;
      contentUrl = 'dordogne2.jpg';
    } else if (nom === 'Gironde') {
      contentNode = girondeContent;
      contentUrl = 'gironde2.jpg';
    } else if (nom === 'Landes') {
      contentNode = landesContent;
      contentUrl = 'landes2.jpg';
    } else if (nom === 'Gers') {
      contentNode = gersContent;
      contentUrl = 'gers2.jpg';
    }
    content.append(contentNode);
    $('#bg')
      .fadeTo('slow', 0.5, function() {
        $(this).css('background-image', `url(./assets/${contentUrl})`);
      })
      .fadeTo('slow', 1);
    $('#products').fadeIn(200);
  });
});
