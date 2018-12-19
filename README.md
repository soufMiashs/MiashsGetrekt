# MiashsGetrekt
Nous essayons d'implémenter dans ce projet un site d'apprentissage interactif de l'anglais. 
Nous couvrons les 3 aspects les plus importants dans l'apprentissage d'une langue : 
  - lecture  
  - écriture  
  - écoute   
Des études ont prouvé que la meilleure façon d'apprendre une langue est de la pratiquer. Mais vue très une grange majorité souffre de la timidité, leur application de la langue est très restreinte. Nous avons créé ce site en utilisant 4 APIs en interaction directe pour rendre l'expérience de l'utilisateur plus aimable et facile.
Le site est composé de deux boxs :   
   - un pour l'intelligence artificielle conversationnelle, ou Chat Bot. Ce robot est conçu pour être très interactif. Sa réponse est :
          * analyser pour ajouter une émoticône correspondant a l'émotion extraite du traitement du texte.
          * lu pour habituer l'utilisateur à écouter la langue ainsi que l'amélioration de sa prononciation des mots à force de les entendre en les lisant.
  - le deuxième est pour la vérification orthographique et grammaticale. L'utilisateur n'a plus besoin d'aller sur google pour chercher la correction. Il peut directement valider ces mots ou même ces phrases sur le site. 
En cas de besoin d'une traduction, le ChatBot offre la possibilité de traduire les mots directement.
Il offre aussi plusieurs autres options que vous pourriez explorer en utilisant notre site.
  
## Sub-Branche: Text-Sentiment-Analysis-Method 

Une API d'analyse sentimentale (émotionnelle) des textes. Cette dernière sera utiliser pour l'analyse sentimentale de la reponse du robot pour ajouter un empji correspondant.

Le lien source : https://market.mashape.com/fyhao/text-sentiment-analysis-method#

## BrainShop.AI

Une intelligence artificielle conversationnelle, ou ChatBot qui permet de faire des opérations tels que : traduction, calculs, recherche sur internet... 

Voici le lien de l'api : https://market.mashape.com/Acobot/brainshop-ai#

## Speech

API offert pour la lecture des textes.

## languagetool
API LanguageTool qui offre une vérification orthographique et grammaticale. C’est un bon vérificateur de grammaire, qui couvre une gamme décente d’erreurs et de faiblesse de style.


Le lien source : "https://market.mashape.com/dnaber/languagetool#"

## mode de fonctionnement
Suite à la réponse de l'intelligence artificielle conversationnelle (ChatBot), l'API d'analyse sentimentale (émotionnelle) renvoie le 3 valeurs chacune correspond à une émotion (négatif, positif et medium) et l'API Speech transforme la réponse du Bot sous format texte en format vocal. 
En demandant une vérification orthographique et grammaticale, l'API languagetool renvoi le type de l'erreur ainsi que des propositions de remplacements.
Le fichier JS (script.js) contient des fetchs imbriquer des apis ainsi qu'un appel d'un API prédéfini en javascript. 

## Remarque
L'objectif technique de ce projet est de s'habituer à interroger des APIs et de faire un Mashup des données de différentes sources.En plus, nous avons essayé d'explorer les différentes options offertes par le site git et de pouvoir maitriser, à la fin de ce projet, l'utilisation de cet outil super-puissant.
C'est pour ça, chaque membre de notre équipe a eu ça propre branche. Nous avons interrogé 4 API différentes (3 cités précédemment et une appeler Random Quotes (source : https://market.mashape.com/sumitgohil/random-quotes#)). Et à partir de cette architecture, nous avons pu tester les différentes options et les maitriser pour finir avec un produit collaborativement créé. Ce qui explique le grand nombre des commits effectuer (voir insights pour plus de détails).
