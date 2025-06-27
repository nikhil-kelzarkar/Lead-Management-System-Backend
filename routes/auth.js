router.post('/login', async (req, res) => {
  // Check email/password, then:
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});
