"""
  A function that tells prospective members
  which category they will be placed by checking
  some conditions
  
  @Description: senior member: 55 years and above
                handicap should be greater than 7

  @data: a list of pairs containing info for a single
         member. age of member & member's handicap
  @return: a list containing member's categories
"""

def open_or_senior(data):
  member_list = []
  for ele in data:
    age = ele[0]
    handicap = ele[1]
    if age >= 55 and handicap > 7:
      member_list.append('Senior')
    else:
      member_list.append('Open')
  return member_list