module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    
    if (req.method === 'GET') {
        res.status(200).json({ 
            success: true, 
            message: 'API is working!',
            timestamp: new Date().toISOString()
        });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};