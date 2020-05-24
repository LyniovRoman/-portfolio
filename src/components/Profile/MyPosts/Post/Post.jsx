import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExIVFhUXFRUYFhcXFRUXFhoZFhUXFhYXFRcYHSggGBomGxgWITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGi8lICYtLS01LS0tLS8vLystLS0tLy0tNS0tLS4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUCAwYBBwj/xABLEAACAQIDBAUHCAcGBAcAAAABAgADEQQhMQUSQVEGMmFxgRMiQpGhscEjM1JicnPR8AcUU5KisuEkNGOCg7MVFpOjJUNkwsPS8f/EABsBAAIDAQEBAAAAAAAAAAAAAAAEAgMFAQYH/8QAMREAAgECAwUGBwADAQAAAAAAAAECAxEEITEFEiJBcTJRYZGxwRMzQoGh0fAjJPEU/9oADAMBAAIRAxEAPwCxiInz09MIiIAIiIAIiIAIkTH7SpUReo4H1dWPcozM4/avSyvUutFGprzt558dF8M+2O4bZ9au8lZd7F6uJhT1Z2eLx1OkPlHC9nE9wGZlLiullNeohbtYhR8T7BOEd3JJYOSdSbknvJ1mHlOwzdo7GowXG7vyM+ePm+zkdXV6V1joaajsUk+sm3smhukdc/8AnW7lp/8A1nNhxMgY9HBYeOkF5C7xFV/Uzov+Y8SNKqt2FU+AEkYfpnUHXpI32SV9hvOVnjLynJ4HDyWcF6AsRVWkmfQsF0rw75MTTP1x5v7wuB42l4jAi4IIOhGYPcZ8dFQyZs/a1Wib03K8xqp71OXjrM7EbFhLOk7eDGqePku2j6vE5zYXSynWISpanU0GfmMew+iew+szo55+vh6lCW7NWNKnUjUV4sRESksEREAEREAEREAEREAEREAEREAETwnx7JVHb1MEqVdWGqsFU+otLadCdTsK5CU1HUtXYAEk2ABJJ0AGpM4bpB0rL3p0SVTi2jN3fRX2y26RYlsSopofJ09WHWZyNN45eaOXPPlOcOwD+0/h/rN3Z+Cp0+Orr3dwhiKtSfDDQp/1pudvVMfLt9Iy2fYL/TB8JHqbHqD/APPwm2q0O8QdGfcQhiW5n1mZjFtzPvmVTZzj82980PQccJJTi+ZF05LkbvLA6hT3gTEqOVu4/jIxJGonqvyMmQN1iON++N/nlPFqTPWAGDrxmubWpZXXxHEfiJG3rQA9qCdt0I6TAsmFxByY7tKrxB9FH+kDoDqMh3cQzTCUYnDwrwcJf8J06kqbvE+44nDtTbdPgeBmqV3QPb4xtH9XrN/aKQurHV00DdpGQbwPGWww7XK+kOHPu5zxNajKjUdOeq/rm5RrqpG5qiIlReIiIAIiIAIiIAIiIAIiQNoY5l+bFNjxvUAI/wAvH1yylSlUdokJTUVdlvhMLv5k2QdZjkB4mV/SPaOHqJ5FKSVANKjDq8zTOpP1tO+UlTH16oAcWUaKSLDt3Vyv2nOayDz9n9Zr4fZ/w5b83n4CdSbm/Ah/qYHVZh439+cyG+PSB7xb3Tcwnm7NO5CxhvniPUfxmQ7p7uzzyi6XueQz904B4UkerhVPCSd7smDmdTOMqcRs4cPwMqsRgfzpOmYSPWpgjOWxm0VygmcqwK6zJHlniKAYkDPwlVWpFTGoVLik6e7ob0q2NxrxmOLpjJl0Oo5H8JoV5tSpwOktKyPEydbG0xgBK2bj3w9VK1M2dGDDkeansIuD3z7nRxCYujTxNH0lBHMEaofrA3HhPgU+hfor20U8ph2OVw6jvya3cd0+JmLtrC/EpfFjrH0GcLNqdkd01Pyy7y5VB1hz7R2yvlxjaRUitT8RwI590042kKi+VT/MPj3zyqZrQn5FbERJF4iIgAiIgAiIgA3L5WvfK3O+Vpvq9EKJUWepTbjuMCv7rAgDutJexsNclzoMh38/zzlzOf8ApqUnwOwnXkm7HGVuh9YXK4lD9qkR6yrH3Tl9n08TXqClTVCxVmGZtZbX0B5z6viHsjHkpPqF5wX6NH/8SFzYLhKxJPDzqV5u7LxNWupOpnbwFW7EPEdH8eouaa25+UQD+K0pmare28naQ4IHiosfC86Xpp0ufF79NTuYfguhcXuDUPhfd0HbOBrGiNHF+QP4TVirrMHL+uXqUl9N97svYf1m39YQCwKgeE6P9FvRWjisPVqV6QI8ramzIDcBBvbpOovxHG87NegGCGlKn/01MhJpOxKMoWzdj5HUx9MauJHbaicDefbqHQ/DLoiDupqJw/6UcGtCpR3RZWpkA/WVvO07GWEZJu1glKPJ/g4KptI8FPqM0iq7nkBqWOQ/r2SQ1dXO6m8zclG83qFzNGKwz0wGalWSxuGqU3VQeB84WveXJIrb8Sy2XsutXyoU/M9Kq+Sdpv6XgD4Sq2nggpIB3rEre1r2NtOWU+n7M6SHE4HygpgPTVldKa6uBqAM/OFrDmbTgMVs+rSfdrCzFFO7e9g1+tbLeyN5GMndls4JQT7zlHS08vLDH0LEyvjsJbyM+cbM21MwDymmbKJ4c5hJkDyXfQvFCnjaBbqs/k27qgKD+IqfCUkk7M+fo/fUv9xZXVipU5RfNM7F2aZ9ow/SGlSxf6g5NyPNbLduRvBD2lc+XDjLCopoPvD5ttRynHdK+j2Iba1GtTRmp1GpEuASqGnYPvn0RuqCL63tO2wtTeBo1B5wyz4j8eM8RiqVKEYTpu9459TTpTk3JsgbQw4Uhl6rZj8JEliybl6L9U5o3I8D+Mr2Ug2Ooi6HoPI8iInSwREQAT1VuQBqcp5JuyKW9UvwUX8dB+eycbtmRk7K5dUKQRQo4fkmbIiKt3M5u5X9IHIw1a2ppuotrdhui3bcicZ0F2a5x9eg3mscHiqZOoUtUop42n0IznOh+HZds4liMjQqbp53q0b+3Lwm9sWrbeh9yqpoWvRj9H9CiN/FKmIrEk3IvSUX80IjZXtmSQTedfTwyLkqKB2KB7p5i8StKm9RzZUVmY9ii59gnybD/pOxK1xUqhf1cnzqYUXRL9ZW1ZgMzfI20HDZzkQs2fX4nisCARmDmDPZA4JHxmCpVl3KtNKi3vuuqsLjjYjWSJhWqhFZmyCgsT2AXPsggMcPh0pjdRFQclUKPUJsdQQQRcHUHMHvE+IYzp9jTX/WEqFVButDLye59BhxJGra30sMp9pwGLWtSSqnVqIrr3OoYewyTVszrjbUhbI6PYXClzQoqm+281rkX+qCbKOwWE+Y/pOwe5iFe3WVlv8AZbeHsc+qfYpwX6VdnNVooUF330CjtY+T9XygJ7p2D4syynzR8gx9O4v+eYlHWGd+c6KsPNPd7pR4hNRyjlJ2ZVVV0RlMyq6zCZvoI0KmEsejlA1MXhkHGvS9QcMfYDK6dr+ijZ3lMW1Ui4ooSPtvdV9m/F8XVVKhOb5JkoK8kj7FIePwu8N5cnXQ/CS57PnabTuaKdndFehFdN05MPYefdKesrBiG1GRlxjqBU+VTUdYcxMMYi1aflF1A8ctQfz75dF+QzTnZ+D/AAU8REsGhERABLrYtOyFuZ9g/reUs6PAJamg7L+vP4yuo+EoxD4bEiIiLiQmGyaQ/Xg3/pqg/wC9SP4zOZ7IH9qPZQPtqL+E0dlv/YXR+hCpoWPSPCmrha9IavSqIMic2UgZDPW0/PdbCVWqDDik4rOQopspVrtkLgjTt0tcz9KzTXwysQSBvL1W9Jb5HdPDLLt4z00ZJEFJoYSjuU0S991FW/PdAF/ZN0jKWZznZVIFuLEqDcn6IuNOIPdJAMiyKPZoxuHFSm9M6OjIe5lKn3zfPGGUAPzs+xMX5Z8KuHqNVQ2YKpKjkxbQKRmCeE++7EwnkcPRo5/J0kp52udxQt8idbTLEYilQUbxtvNYAAs7ta9lUXao9gTlc5HlMRUxTDeXDKByq191/wB2mjj+KWqMprhQSqd5NldtjDlwtuBY/wAJPwgbU3WC1qbUt4hVclWpFjkFDjqkmwG+FuSALmTcQbKx7D7pCUHHJkqc7STR+dNsrbEVKY/a1vUGYCUNYZmfQOknR1qSPiXHylSuW+zScuEHeW3Se/snF0cE1VyqKSbj8CT2Alb98ahJFk4O9u8pJlwmzGUtyo6a7rut+e6xF/ZNXCOIQas7Hk+2fo22R+r4JWYWesfKtzAIAQfugHvYz5r0G6PHGYkBhejTs1U8CPRTvYj1Az7oBPN7fxaUVQj1fsMUIfUexETywyeSsrJ5Ft4C9NusOUtJi6gggi4OslGVicZWZzFQAEgG4ubGYzfjKG45XhqO4zRGjQTuriIiB0TqUFgB2CctOqEqqiuI5HsREoFRNmxf70/ZQT21H/Ca5nsL+9VuyhQ9tSv+E0tl/P8AsyFTQ6KIieiKjCrSDai88o0QuSgCbIgAmnF4laaF20HIXJJNlVRxYkgAcSQJ7icSlNd52AF7C+pPAKNWY8AMzMcHhGqOK1QboX5qmdQSLGo/17EgD0QTxJtdSpOb8CMpWGyNnEE16wBrMLcxSQ5ikh8AWPpNnoFAtYmLkgZC/ZNNJJWQuQdq06e4wqAGmwIYEXBByK243va3G8rdisxptSqXLU2KedmWQqGpljxbcZQx+krS0qYYkh3N2B80eivDzRxa2W8c9bWuRK6nli3HBqFI+K1Kov6mHqEoxMbwv3E4OzKrpjglqoaZ0emy93I+Bz8JwfRTZnk8GtR1tUqMXz1Cvu2HZcU1PjPp20MI1SoL5IozPtNvZOU2u4yA0uT4cJnbztY28GoycXzSPhe0zevWP+NV/wBxphhcM9V1poN53YKo5k/DtmNd95mbmzH1kmd9+iXZys1XEEXKWRDyLAl7dtt0ePbH8ViFh6DqPl6mI+KbO86LbETB0FpJYnWo3FnOp7uAHICXM1U9PGbZ8/q1JVJucnmx2GgiIlZIREQApdtjz1+z8TK6We3NV7j8JWRqHZQ/S7CEREkWiXmy65sabdZdO0fn4SjlnXBC06y6gAN4ZZ+6RkrqxTVV1YuImFGoGUMNDM4sJaCNlNuYvPStRCjlvUWZgO8rUc/6cSNjkbdDoL1KbCog0uy+jfgGUshPJjG8DWVKum9NPMhNXR10TRgsUtWmtRDdWAI4HPgRwI0I4ETfPUlIkBErV2cJU8lSUlN4KrVHYW3iha6ooPm5qxJB0sLz5AoYwYeoabBitV2alui92I3npk6A3BYXIuCfomX4dRcuIhUbtkWGD2VSpnfALP8AtHJd89QGbqj6q2HZJt5DDVn4CmvbZ6nqHmr33bukilQC8yeJJuT4/DSaSVig2RE8Y2gBqxJytKWhdsXVPBKNFL/WLVXYfummf8wkjaW0wrbijfqsPMpg52+k59BObHuFzYHSlsPTJZt52JZiBbfc62HAAAAa2CjWLYmaUbFlKLcshtjFBE3R1my8OJnz/b+JstRvoU39iky82njTm5PnHT88hOdXC/rLGkfmx88eYIuKYPM6nkv2gZmSqRgt+WiN6lBYei5S19z5j0Z6N1sY+6g3UHXqEeavYPpN2eu0+z7D2VTwtJaNIHdGZJzZmOrMeZ/ASRhsOlNQlNVRVFgqgADuAm4TC2htOeKdtI937MaMLG2lp4zbMFEzmUMR0EREDoiIgBTbcPnL9n4ytk3bD3qdwA+PxkKNR0RoUlaCEREkWCWmya4INJtDe3xHx9cq5uwwJOXWGa94zt6r+qcauiFSN4lhgHNNzSbQnI/nnLWVWMHlaYqrquvx9WsmYHE76A8Rke+UzV8xSorre8yTPJ7EqKTTg8UcKxYAtRY7zqoJZGPWqU1GZB1ZRne7C5JB6fD10qKHRgysLqykEEHiCNZzhEiLRamxei5pMTcgDepsf8SmcifrDdbtm1hNpJJQq+f7KZRtodlNWJw6VFKOoZTwPYbgg6gg2IIzBEo6HSJ1yrUW+3S89fFDZwewBu+TaPSHCNYeXRSfRqHybfu1LH2TYp1Izzg79CFzZTTFUsqdRKq8Fr3Vx2eWQG470J5kzcNp4kdbCi/1K6kfxqvumX69S4VEPcwMwfaVIemPC5jSxM0Hwb6I9baOKPVwyD7yvu/yU3mmpRxNX5ysKa/Ror53aDUqXy7VVT2zXU20nBWPslXtHpEFHnOlIcywB9Zg8TNlscHJ6rzLb5HCqQi2JzOZZ2NrbzuxLMe1iTKHH44kl3PcPgBKbEbfUm1JWqkkDesVS7EAHfawIueF5g+yqtU3q1R92qkpwyY3Bcfug3zEVnNLObNGjRjSV1mzUalTEtankoJDVNVW2oT6b+wcdN03eEwy01CILAeJJOZJPEk5kyM1dqO6rmnbIWUFCq/S3bsNwcTcAew7f+JUf2i2+lfzb8t/q37LzEx0q9R23eHwz+7E8RUqTlaXkSpsQZzATcq275lMpSMlmU8E9kS0REQARE0Y6ruox7LDvOU6ldnUruxQYp952PMn+k1REbNJKysIiIHRM6NQqwYcDeYRA4W9FhTqW9CpmOwn828RNY+Qq/Ub3f0M1Yb5SmafpL5yfEfnnJVvL0vrr7x+IkH4izVnn0f7LKeyv2Rid5dw6r7v6SwlElZ2F5R3XY8MxZZnPJEiR2WYMoORF++SWWRV36hK0gGtcFz82p5XHWb6o8SsupQlN8JU0QMRgsMGA8hTZ2BKhaa753bXsbdo1PGef8FpmkiA7lXdClhUqMhcDdI3lYEG/MX7DpJx2YBffJZjqT2G43bdUA5i3fcnOaalR0PnoagORZbCpbhvAkLUtzuCNLHObeH3oRsptvqNQoOKuQH2Buj5WnVNgLsHash7vS9aiaMPhsMDahT8o17EU0F78mawCnvIl5s7HUKo+Vrgkl1COPJA7rFepUzOnO0s6GIK5DDsBoCrUituwhr27xGJYqpG6az8l+fYsjXaWXoc0uy2sXrNuKvnFUuW8072bW7NAOGsl4UXG9cJTGdt65PG9R7+y/eTw37X2ulMksVBuPN3he1wCQBmbC5y5SC9QubpStxD1bgA80pnzgfBO+R3pTV5ZFzk5PPUmVsTTIJIG4eszWCkcLX63DPTt4SNWxmW8yEUrG9xc25lNQvfnzAGc20cCb7zEu/Bm0H2F0X38yZL8gecqcorTP8Av79E1G2rNOyaZFKnfUImXgMpOErBSakb07WzJQ9Q8yp9A92WZuLm8mYTGK9xmGGqNkw7eRHaLiZOJw8lJzWaf46mfKlKGpJiIiZEREQASp23W0TxPuHxlnVqBQWOgE5qtULMWOpMtpRzuMUIXdzCIiXjgiIgAiIgBnRqFWDDUGWFKsEqBx1KnsPH1H2GVkzWpkVOhz7jwPwnLXK5xuWGPpmlUFRdCc+/iPES1pVAwDDQiQsI4rUirajI/wDtP55TTsusUY0m55d/9ZVJXXihaSbVua9C2mutWC2vckmygC7MeSjidfUTpNkg4PHblWpvUndgbBl8nZUbNVUM4N8rtzI5AWnhqHxZPwKM3kibT2Y1TOsbL+yU5f6jjNvsiw1B3hLVEAAAAAAsABYAcgOEh4balNzu3KseDi1+wHqk9gJk28bknHhtbwO7tjF0B1F5HfAKePxkuYubAnkIRk08iSk46M5/ZOzt+gjC1nBax+uS2h757/y2n7OmO5QPXYZyw6Opu4XDjlRpfyCWMuqV5qbs+bJqtKxRHo+gRkUKoZWBCgLqLHQTHAKWo06hHWRGPYSoJB8by+Mrtgn5Gx4VK6+C16gHstOqrJwbfevcPjSTNETbiae61hpqJqkk75jcXdXPGW+Ur61ENrqDkRcMDzUjMSwJkHygLEXz1txHfync+ROKTumZU8YyZVM1/aWtb7wDT7Qy5gSeDKos5OQUDmSSfUB8Zs2KhAc3AG+QFAso3SQSOW9kbaC3MmJ4rDxUfiLJ/wB5egnXpKGaLKIkLaWM3BYdY6dnbM9K7sUxi5OyIe2MVc7g0GvfylbERlKysPwioqwiInSYiIgAiIgAiIgBJ2fiNxwTocj3c5P2vh9Ki6i17ewynk3B48r5rZpp2ju7OyRazuimcHfeRb4LEb6huOh75t2WgNWuCL/Nfyt+EpsLVFKpa90bQ9nA9409cvNk/O1vs0f/AJJZQW65dPdClSO7JWGNwdsxp+cpWNWZKlN99rCqgZSbjzz5K4v1bb98sstNCOkrrdSJy+2sqVQjUIzDvUFh7QI/Qld2YxF79Np8jq5hX6rdx90zBvnBEVWUhXkRtlD5Cl91T/kElSNsw/I0vu6f8gkmdn2n1BaCQNjrZH7atb/caT5C2VhXp0912DMWdiRpd2Ln2k92mes6nwP7A9RtEaHvkOStoNmByEg1qoVSx0AJy1y5CXU1wodpdkh4uoXbcU2A67DhcXCr9a2d+GXPLZh8NYWUWH5zPM9s9wNEN1cwSSO3eO9f2ywr0Ny0slLPdLN5Ry5lcy2Np7snquP8V/bZvjNmIGhldSx4p+VUZt5TwF6dM3PrlGITdJpeBDEJzirFjjsWKY5sdB8T2Sgq1CxJJuTFSoWNybkzGIxjuhTpqCEREkWiIiACIiACIiACIiACIiACdB0WrFmq34LRHq8pOfl50Q61f/S9zy6jpLp7oXxC4V1OlnPbUo3DLzDL6wZ0MpMf1j9qXUXxEMP2rFjsqrvUKTfSpUz60BkoSBsD+7UPuaY9SCT5XUym+pQQtkVd6kuRG7dM/qHd+EmxE5J3baOITxjaeyHjq3ojxhGN3YnGO87ESq+8SZExZuLdkkEyIzXN42sh+ESX0Tpf2aix1NKn/Isn7RGQ75E6Kf3LDfcUv5BJm0OqO+VTf+Z9RKMm5plXiNPGc7Wt5Wrb6a3/AOlTnRYg5Tna/wA7V+0p/wC2g+ElV+XL7eo7yR5EREDoiIgAiIgAiIgAiIgAiIgAiIgAl70Q1rf6fuc/GUUt+i+ICeWy9NfZTB+MvoK6l090UV02kl3nUVHsCZQ4l7nxuZIxWNv+A+Mr6rZE9hPsjFOG6SoUnFNstujRvhMOedGkfWgMspW7CdVw1AXGVGkNeVNZNOIT6QlVVNzl1Ykk2jbEitjV4XM0VcYx0y98iqcmTVOT5EjE4ndyGvulfMWYDWaKla+QjEYqI1TpW0Pa9S+QmsTwT0TvMaSsiy6Mf3TD/c0/5RN+0TkB2yP0ZH9koDlTUerKbMe12tyErkv80urMukryK/EnSc/ifnqn+Q/w2+Evq5zlDi/n3+xTPtcfCTn8uXT3Q9LRHkREzzoiIgAiIgAiIgAiIgAiIgAiIgAm/Yutb7wf7NKIjWF+rp7o59SLOYYnqN9lvcYiMx7SLpaEnZ3zVP7tP5RN89idl2mLR7KEwqREjyJIiNrPRETjLo6CeiIgSZZdGv7rS+z8TPMV1zESL+bLq/UzKHaIFXUyjxnz7/d0v5qsROz+XLp7odnov7kYxETPAREQAREQAREQA//Z" alt="Avatar"/>
      { props.message } 
      <div className={classes.like}>
      <span>like</span> { props.likesCount } 
      </div>
    </div>
  );
};
export default Post;