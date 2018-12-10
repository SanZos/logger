# Logger pour des services NodeJs 
## Utilisation

```typescript
const logPath:string = "/var/log/{service}.log";
let logger:Logger = new Logger(logPath);
```
## Méthode
### Info
```typescript
public info(log: any): void;
```
Ecriture du message dans le fichier logPath
```shell
[JJ/MM/AAAA HH:MM:SS GMT][INFO] {log}
```

### Erreur
```typescript
public error(log: any): void;
```
Ecriture du message dans le fichier logPath
```shell
[JJ/MM/AAAA HH:MM:SS GMT][ERROR] {log}
[JJ/MM/AAAA HH:MM:SS GMT][ERROR] {stacktrace}
```

### Fatal
```typescript
public fatal(log: any): void;
```
Ecriture du message dans le fichier logPath
```shell
[JJ/MM/AAAA HH:MM:SS GMT][FATAL] {log}
[JJ/MM/AAAA HH:MM:SS GMT][FATAL] {stacktrace}
```

### Debug
Lancement du script avec env DEBUG
```typescript
public debug(log: any): void;
```
Ecriture du message dans le fichier logPath si le process est lancé avec le flag debug
```shell
[JJ/MM/AAAA HH:MM:SS GMT][DEBUG] {log}
```
