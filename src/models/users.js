class User {
    constructor(id,ism, username,image,password, isDeleted=false) {
        
        this.id = id;

        this.ism = ism
        this.username = username;
        this.image = image;

        this.password = password;
        this.isDeleted = isDeleted;
    }
}

module.exports = User;