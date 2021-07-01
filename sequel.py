def sequel_recommender(n):
    import numpy as np
    import pandas as pd
    import re

    data1=pd.read_csv('movie.csv')
    data2=pd.read_csv('ratings.csv')

    allmovies=data1.iloc[:,1]

    allmovies=allmovies.to_list()

    likedmovies=[]
    for ind in data2.index:
        if data2['userid'][ind]==n:
            if data2['rating'][ind] >4.0:
                id1=data2['itemid'][ind]
                temp=data1['movtitle'][id1]
                likedmovies.append(temp)

    search=[]
    for i in range(len(likedmovies)):
        q=likedmovies[i]
        q1=q[:-7]
        newlist=[]
        r=re.compile(".*"+q1)
        newlist = list(filter(r.match, allmovies))
        if len(newlist)!=0:
            newlist.remove(q)
        if len(newlist)!=0:
            search.extend(newlist)  
    return search