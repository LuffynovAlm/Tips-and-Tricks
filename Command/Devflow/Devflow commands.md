# Devflow Commands

## State management

| Command | Description | Important |
|---|---|---|
| `devflow status` | Voir l'état courant du backlog (tous les items). Ex : `devflow status` | ★ |
| `devflow status ITEM` | Voir l'état d'une story ou epic spécifique. Ex : `devflow status 8-3` |  |
| `devflow checklist ITEM --to ÉTAT` | Afficher la checklist de la porte avant transition. Ex : `devflow checklist 8-3 --to IN_PROGRESS` | ★ |
| `devflow advance ITEM --to ÉTAT --checklist-ok --approve "QUI (RAISON)"` | Franchir la porte, valider jugement, enregistrer approbation, avancer état. Ex : `devflow advance 8-3 --to IN_PROGRESS --checklist-ok --approve "JB (dev terminé)"` | ★ |
| `devflow advance ITEM --to ÉTAT --mockup-version N` | Rouvrir une porte DoR fermée avec une nouvelle maquette (story UI). Ex : `devflow advance 8-1 --to READY --mockup-version 2` |  |

## Jira sync

| Command | Description | Important |
|---|---|---|
| `devflow sync-plan ITEM` | Planifier synchro Jira : action, champs, statut cible. Ex : `devflow sync-plan 8-3` |  |
| `devflow sync-match ITEM` | Chercher un doublon Jira avant création (lire JSON de sync-plan sur stdin). Ex : `devflow sync-plan 8-3 \| devflow sync-match 8-3` |  |
| `devflow sync-transition "<STATUS>"` | Résoudre la transition Jira légale (lire résultat de getTransitionsForJiraIssue sur stdin). Ex : `jira-api get-transitions LUFFY-42 \| devflow sync-transition "In Progress"` |  |
| `devflow sync-record ITEM --key <CLÉ> --status "<STATUT>"` | Enregistrer la clé Jira + rattachement story → epic. Ex : `devflow sync-record 8-3 --key LUFFY-42 --status "In Progress"` |  |
