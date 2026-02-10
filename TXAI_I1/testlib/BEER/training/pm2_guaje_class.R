cp_guaje_class <- cp('cp_guaje_class', c('blanche', 'lager', 'pilsner', 'ipa', 'stout', 'barleywine', 'porter', 'belgian-strong-ale'))
g_guaje_class <- function(u,y){
operator <- operator( min , max )
y$w <- infer_rules(fuzzy_rules(
fuzzy_rule(1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0),
fuzzy_rule(1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0),
fuzzy_rule(0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0),
fuzzy_rule(0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0),
fuzzy_rule(0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0),
fuzzy_rule(0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0),
fuzzy_rule(0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1),
fuzzy_rule(0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0)),
operator, list( u[[1]]$w, u[[2]]$w, u[[3]]$w))
y
}
t_guaje_class <- function(y){
templates <- c('The class is Blanche', 'The class is Lager', 'The class is Pilsner', 'The class is IPA', 'The class is Stout', 'The class is Barleywine', 'The class is Porter', 'The class is Belgian-Strong-Ale')
return(templates[which.max(y$w)])
}
pm2_guaje_class <- pm(y=cp_guaje_class, g=g_guaje_class, t=t_guaje_class)
