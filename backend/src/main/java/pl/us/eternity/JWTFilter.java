package pl.us.eternity;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Component;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Component
public class JWTFilter implements javax.servlet.Filter {

    //wstępna wersja filtra
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        String header = httpServletRequest.getHeader("authorization");

        if (httpServletRequest == null || !header.startsWith("Bearer ")) {
            throw new ServletException("Wrong or empty header");
        } else {
            try {
                String token = header.substring(7);
                Claims claims = Jwts.parser().setSigningKey("qwertyuiop").parseClaimsJws(token).getBody();
                servletRequest.setAttribute("claims", claims);
            } catch (Exception exception) {
                throw new ServletException("Wrong key");
            }
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }
}

