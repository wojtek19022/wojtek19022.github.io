# Portfolio
Web app for a presentation of my web development skills. <br>
Website consists of few sub-sites for a sorting of website content.<br>

### Testing environment configuration
1. Set up NGINX<br>
`sudo apt install nginx`
2. Go to NGINX directory in */etc/nginx*
3. Download nginx config file named *woj_sol_website*
4. Copy website NGINX config to */etc/nginx/sites-available* path
5. copy website content to */var/www/html* path
6. link website content to a given config file<br>
`sudo ln -s /etc/nginx/sites-available/woj_sol_website /etc/nginx/sites-enabled/woj_sol_website`

#### Website is running by default on an address 127.0.0.1:81

If you want to unlink website and no longer present it on a given address, just execute comman<br>
`sudo unlink -s /etc/nginx/sites-enabled/woj_sol_website`

**WARNING** Sometimes at the beginning website can be unavailable at the beginning. If this happen, execute command<br>
`sudo killall apache2` or `sudo systemctl restart nginx` (first of all check if nginx is running `sudo systemctl status nginx`)

## Testing
- conduct check on nginx website correct config<br>
`sudo nginx -t`
- reload nginx config when changed<br>
`sudo nginx -s reload`