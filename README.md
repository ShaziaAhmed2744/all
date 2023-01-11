
    public String doLogin(HttpServletRequest req, UserCredentials credentials, RedirectAttributes attr) {

        Subject subject = SecurityUtils.getSubject();

        if (!subject.isAuthenticated()) {
            UsernamePasswordToken token = new UsernamePasswordToken(credentials.getUsername(), credentials.getPassword());
            try {
                subject.login(token);
            } catch (AuthenticationException ae) {
                logger.error(ae.getMessage());
                attr.addFlashAttribute("error", "Invalid Credentials");
                return "redirect:/login";
            }
        }
        return "redirect:/home";
    }
