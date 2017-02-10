# SURF-2017
Wordpress Version: 4.7.2

# How to install
Step 1: Clone or Download source code: git@github.com:minhtu2501/SURF-2017.git

Step 2: Create the Database and a User

	1. Log in to your cPanel.

	2. Click MySQL Database Wizard icon under the Databases section.

	3. In Step 1. Create a Database enter the database name and click Next Step.

	4. In Step 2. Create Database Users enter the database user name and the password. Make sure to use a strong password. Click Create User.

	5. In Step 3. Add User to Database click the All Privileges checkbox and click Next Step.

	6. In Step 4. Complete the task note the database name and user. Write down the values of hostname, username, databasename, and the password 
	   you chose. (Note that hostname will usually be localhost.)

Step 3: Setup wp-config.php

	1. Return to where you store source in Step 1 and open file wp-config.php in a text editor.

	2. Enter your database information under the section labeled
		 // ** MySQL settings - You can get this info from your web host ** //
	- DB_NAME 
	  The name of the database you created for WordPress in Step 2.
	- DB_USER 
	  The username you created for WordPress in Step 2.
	- DB_PASSWORD 
	  The password you chose for the WordPress username in Step 2.
	- DB_HOST 
	  The hostname you determined in Step 2 (usually localhost, but not always; see some possible DB_HOST values). If a port, socket, or pipe is 		  necessary, append a colon (:) and then the relevant information to the hostname.
	- DB_CHARSET 
	  The database character set, normally should not be changed (see Editing wp-config.php).
	- DB_COLLATE 
	  The database collation should normally be left blank (see Editing wp-config.php).

	3. Enter your secret key values under the section labeled
		 * Authentication Unique Keys.

	4. Save the wp-config.php file.

Step 4: Upload the files
	Now you will need to decide where on your domain you'd like your WordPress-powered site to appear:
	- In the root directory of your website. (/surfstartupwave_vn)
	- In a subdirectory of your website. (/dev_surfstartupwave_vn)
	
	1. In the Root Directory	

	- If you need to upload your files to your web server, use an FTP client to upload all the contents of the wordpress directory (but not the 		directory itself) into the root directory of your website.

	- If your files are already on your web server, and you are using shell access to install WordPress, move all of the contents of the 		wordpress directory (but not the directory itself) into the root directory of your website.
	
	2. In a Subdirectory

	- If you need to upload your files to your web server, rename the wordpress directory to your desired name, then use an FTP client to upload 
	the directory to your desired location within the root directory of your website.

	- If your files are already on your web server, and you are using shell access to install WordPress, move the wordpress directory to your
	desired location within the root directory of your website, and rename the directory to your desired name.

	*Note: If your FTP client has an option to convert file names to lower case, make sure it's disabled.

Step 5: Create your domain
	
	1. Select Domain Management -> Domain
	
	2. Create a new domain with domain name and Home directory, You can create a new home directory or use existing home directory

	3. Select DNS Manager -> Slect domain you're created in step 2 -> Edit

-> Finished installation, connect to the website by domain name 


