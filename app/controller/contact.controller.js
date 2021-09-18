exports.create = async (req,res) =>{
    res.send({message: "create handler"});
};

exports.findAll = async (req,res) =>{
    res.send({message: "finAll handler"});
};

exports.findOne = async (req,res) =>{
    res.send({message: "finOne handler"});
};

exports.update = async (req,res) =>{
    res.send({message: "update handler"});
};

exports.delete = async (req,res) =>{
    res.send({message: "delete handler"});
};

exports.deleteAll = async (req,res) =>{
    res.send({message: "deleteAll handler"});
};

exports.findAllFavorite = async (req,res) =>{
    res.send({message: "findAllFavorite handler"});
};